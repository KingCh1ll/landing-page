let Bot;

function setBot(bot) {
	Bot = bot;
}

function delay(ms) {
	new Promise((resolve) => setTimeout(resolve, ms));
}

function MSToTime(ms) {
	let RoundNumber = ms > 0 ? Math.floor : Math.ceil;
	let Days = RoundNumber(ms / 86400000);
	let Hours = RoundNumber(ms / 3600000) % 24;
	let Mins = RoundNumber(ms / 60000) % 60;
	let Secs = RoundNumber(ms / 1000) % 60;

	var time = Days > 0 ? `${Days} Day${Days === 1 ? "" : "s"}, ` : "";
	time += Hours > 0 ? `${Hours} Hour${Hours === 1 ? "" : "s"}, ` : "";
	time += Mins > 0 ? `${Mins} Minute${Mins === 1 ? "" : "s"} & ` : "";
	time += Secs > 0 ? `${Secs} Second${Secs === 1 ? "" : "s"}.` : "0 Seconds.";

	return time;
}

function GetUserCount(bot) {
	var CollectedUsers = 0;

	bot.guilds.cache.map(
		(server, id) => (CollectedUsers = server.memberCount + CollectedUsers)
	);

	return CollectedUsers;
}

function FormatNumber(Number) {
	if (typeof Number === "string") {
		Number = parseInt(Number);
	}

	const DecPlaces = Math.pow(10, 1);
	var Abbrev = ["k", "m", "g", "t", "p", "e"];

	for (var i = Abbrev.length - 1; i >= 0; i--) {
		var Size = Math.pow(10, (i + 1) * 3);

		if (Size <= Number) {
			Number = Math.round((Number * DecPlaces) / Size) / DecPlaces;

			if (Number === 1000 && i < Abbrev.length - 1) {
				Number = 1;
				i++;
			}

			Number += Abbrev[i];
			break;
		}
	}

	return Number;
}

module.exports = {
	setBot,
	delay,
	MSToTime,
	GetUserCount,
	FormatNumber,
};
