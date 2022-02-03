const chalk = require("chalk");

module.exports = async (content, type = "log") => {
	if (type === "log") {
		return console.log(`📋 | ${content}`);
	} else if (type === "warn") {
		return console.log(`⚠ | ${chalk.yellow(content)}`);
	} else if (type === "error") {
		return console.log(`⛔ | ${chalk.red(content)}`);
	} else if (type === "bot") {
		return console.log(`🤖 | ${content}`);
	} else if (type === "web") {
		return console.log(`🖼 | ${content}`);
	} else {
		return console.log(
			`⚠ | Wrong type of logger. Expected: log, warn, error, bot, or web. Instead, got ${type}.`
		);
	}
};
