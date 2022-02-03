// KingCh1ll //
// Last Edited: 7/19/2021 //
// Index.js //

// Librarys //
const { Intents } = require("discord.js");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const parser = require("body-parser");
const ejs = require("ejs");
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");

// Varibles //
const logger = require("./utils/logger");
const PackageInfo = require("./package.json");
const Render = require("./utils/render");

const expressStatic = express.static(
	path.join(`${process.cwd()}${path.sep}assets`)
);
const MainDir = path.resolve(`${process.cwd()}${path.sep}`);

// Loading Splash Screen
console.log(require("asciiart-logo")(require("./package.json")).render());

// Start //
dotenv.config({
	path: __dirname + "/.env",
});

process.on("uncaughtException", (err) => {
	logger(err.stack, "error");
});

process.on("unhandledRejection", (err) => {
	logger(err.stack, "error");
});

const Client = require("./structures/client");
const CeCe = new Client({
	bot: {
		intents: [
			Intents.FLAGS.GUILDS,
			Intents.FLAGS.GUILD_MEMBERS,
			Intents.FLAGS.GUILD_MESSAGES,
			Intents.FLAGS.GUILD_PRESENCES,
		],
	},
});

// Functions //
function GetFiles(FilePath) {
	if (!FilePath)
		return console.error("⛔ | You didn't provide a valid file path!");

	return fs.readdirSync(path.join(__dirname, "./routes"));
}

async function LoadRoutes(app) {
	const RoutesPath = path.join(__dirname, "./routes");
	const routes = GetFiles(RoutesPath);

	if (!routes.length) return;

	for (const file of routes) {
		const name =
      file.split(".")[0].indexOf("index") > -1 ? "/" : `/${file.split(".")[0]}`;

		try {
			app.use(name, require(`${RoutesPath}/${name}`));
		} catch (err) {
			console.error(
				`⛔ | Uh oh! Looks like an error occured with loading route: ${name}. \n\n${err}`
			);
		}
	}
}

async function Start() {
	await mongoose.connect(process.env.MONGOOSEURL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	mongoose.connection.on("open", () => logger("DATABASE - ONLINE"));

	await CeCe.LoadEvents(__dirname);
	await CeCe.LoadCommands(__dirname);

	await CeCe.LoadModules();

	// App //
	const app = express();

	// Code //
	console.log("-------- Website --------");
	async function StartWebsite() {
		app.use(parser.json());
		app.use(parser.urlencoded({ extended: true }));

		app.set("views", path.resolve(`${MainDir}${path.sep}views`));
		app.use("/assets", expressStatic);
		app.use("/:a/assets", expressStatic);
		app.use("/:a/:b/assets", expressStatic);
		app.use("/:a/:b/:c/assets", expressStatic);
		app.use("/:a/:b/:c/:d/assets", expressStatic);

		app.engine("html", ejs.renderFile);
		app.set("view engine", "html");

		app.use(
			session({
				secret: process.env.SECRET || "SuperSecret",
				resave: false,
				saveUninitialized: false,
				store: MongoStore.create({
					mongoUrl: process.env.MONGOOSEURL,
				}),
			})
		);

		app.use(
			require("serve-favicon")(
				path.resolve(
					`${process.cwd()}${path.sep}assets${path.sep}images${path.sep}site${
						path.sep
					}favicon.ico`
				)
			)
		);

		app.get("/service-worker.js", (request, response) =>
			response.sendFile(path.resolve(__dirname, "utils", "service_worker.js"))
		);

		app.use((req, res, next) => {
			req.bot = CeCe;

			next();
		});

		LoadRoutes(app);

		app.use((request, response, next) => {
			// Page not found

			response.status(404);
			Render(response, request, "404.ejs");
		});

		app.use((err, request, response, next) => {
			console.error("Website Error!", err.stack);

			response.status(500);
			Render(response, request, "500.ejs");
		});

		app.listen(process.env.PORT || 3000, () =>
			console.log("💻 | Server listening to port 3000.")
		);
	}

	StartWebsite();
}

Start();

CeCe.login(process.env.token);
