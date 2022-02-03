const Discord = require("discord.js");

exports.run = async (bot, event) => {
	LogError("Fatal", event);

	console.log(`ERROR! => ${event}`);
};
