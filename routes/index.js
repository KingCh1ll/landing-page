const Express = require("express");

const Router = Express.Router();

const Render = require("../utils/render");
const Config = require("../config");

Router.get("/", async (request, response) => {
	const userGuild = request.bot.guilds.cache.get("875048404592525352");
	const user = userGuild.members.cache.get("571811686617710592") ||  await userGuild.members.fetch("571811686617710592");

	if (!user) return response.status(500).send({ status: 500, message: "Uh oh... failed to fetch KingCh1ll." });

	let color = "#505357";

	if (user?.presence?.status) {
		if (user.presence.status === "online") color = "#00ff51";
		if (user.presence.status === "dnd") color = "#f01d1d";
		if (user.presence.status === "idle") color = "#fff200";
	}

	let emote, text;

	if (user?.presence?.activities.find(active => active.type === "CUSTOM")) {
		const status = await user.presence.activities.find(active => active.type === "CUSTOM");

		if (status?.emoji?.id) emote = `https://cdn.discordapp.com/emojis/${status.emoji.id}.${status?.emoji.animated ? "gif" : "png"}?size=2048`;
		else {
			emote = status?.emoji?.name;
		}

		if (status?.state) text = status?.state;
	}

	let status = {
		state: {
			text: user?.presence?.status,
			color
		},
		emote,
		text
	};

	let activities = [];

	if (user.presence.activities.filter(active => active.type === "PLAYING")) {
		const acts = await user.presence.activities.filter(active => active.type === "PLAYING");

		acts?.forEach(active => {
			console.log(active);
			activities.push({
				appID: active.applicationId,
				name: active.name,
				url: active.url,
				details: active.details,
				state: active.state,
				createdTimestamp: active.createdTimestamp,
				timestamps: {
					start: active.timestamps?.start ? new Date(active.timestamps.start).getTime() : null,
					end: active.timestamps?.end ? new Date(active.timestamps.end).getTime() : null
				},
				assets: {
					large: {
						text: active.assets?.largeText,
						image: active.assets?.largeImage ? `https://cdn.discordapp.com/app-assets/${active.applicationId}/${active.assets.largeImage}.png` : null
					},
					small: {
						text: active.assets?.smallText,
						image: active.assets?.smallImage ? `https://cdn.discordapp.com/app-assets/${active.applicationId}/${active.assets.smallImage}.png` : null
					}
				}
			});
		});
	}

	Render(response, request, "card.ejs", {
		userdata: {
			id: user.user.id,
			username: user.user.username,
			discriminator: user.user.discriminator,
			nickname: user.nickname,
			status,
			activities,
			createdTimestamp: user.user.createdTimestamp,
			avatar: user.user.avatar,
			projects: Config.projects
		}
	});
});

module.exports = Router;