const { Client, Collection, Intents } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const util = require("util");
const fs = require("fs");
const path = require("path");

class bot extends Client {
	constructor(settings) {
		super(settings.bot);

		// Config
		this.config = require("../config.json");

		// Utils
		this.logger = require("../utils/logger");
		this.functions = require("../utils/functions");
		this.wait = util.promisify(setTimeout);

		// Collections
		this.commands = new Collection();
		this.events = new Collection();
		this.cooldowns = new Collection();

		return this;
	}

	async LoadModules(settings) {
		this.functions.setBot(this);
	}

	async LoadEvents(MainPath) {
		fs.readdir(path.join(`${MainPath}/events`), (err, files) => {
			if (err) {
				return this.logger(`EVENT LOADING ERROR - ${err}`, "error");
			}

			files.forEach((file) => {
				let EventName = file.split(".")[0];
				let FileEvent = require(`../events/${EventName}`);

				this.on(EventName, (...args) => FileEvent.run(this, ...args));
			});
		});
	}

	async LoadCommands(MainPath) {
		const commandFiles = fs
			.readdirSync(path.join(`${MainPath}/commands`))
			.filter((file) => file.endsWith(".js"));
		const rest = new REST({ version: "9" }).setToken(process.env.token);
		const commands = [];

		this.REST = rest;

		for (const file of commandFiles) {
			const command = require(path.resolve(`${MainPath}/commands/${file}`));

			this.commands.set(command.data.name, command);

			commands.push(command.data);
		}

		(async () => {
			try {
				// For global: applicationCommands(CLIENTID) (takes a while to cache | recommended for full production)
				// for only one server: applicationGuildCommands(CLIENTID, GUILDID)

				await rest.put(
					Routes.applicationGuildCommands(
						this.config.client_ID,
						this.config.guild_ID
					),
					{ body: commands }
				);

				console.log("Successfully registered application commands.");
			} catch (error) {
				console.error(error);
			}
		})();
	}
}

module.exports = bot;
