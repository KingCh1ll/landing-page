const os = require("os");
const Discord = require("discord.js");

module.exports = {
    data: {
      name: "stats",
      description: "Ch1ll Support's stats."
    },
    async execute(bot, interaction) {
        const BotMessage = await interaction.reply("🏓 | Pinging...");

        var UsedMemory = os.totalmem() - os.freemem();
        var TotalMemory = os.totalmem();
        var MemoryPersentage = `${((UsedMemory / TotalMemory) * 100).toFixed(
            2
        )}%`;

        var LocalPing = new Date().getTime() - interaction.createdTimestamp;
        var APIPing = bot.ws.ping;

        const StatsEmbed = new Discord.MessageEmbed()
            .setTitle("📊 Stats 📊")
            .addField(
                "**LATENCY**",
                `\`\`\`Ch1llz: ${LocalPing}ms\nAPI: ${APIPing}ms\`\`\``,
                true
            )
            .addField(
                "**STORAGE**",
                `\`\`\`Memory: ${(UsedMemory / Math.pow(1024, 3)).toFixed(
                    2
                )}/${(TotalMemory / Math.pow(1024, 3)).toFixed(
                    2
                )} (${MemoryPersentage}) MB\nRAM: ${(
                    process.memoryUsage().heapUsed /
                    1024 /
                    1024
                ).toFixed(2)}/${(
                    process.memoryUsage().heapTotal /
                    1024 /
                    1024
                ).toFixed(2)}MB\`\`\``,
                true
            )
            .addField(
                "**DATA**",
                `\`\`\`Uptime: ${bot.functions.MSToTime(
                    bot.uptime
                )}\nUsers: ${bot.functions.FormatNumber(
                    await bot.functions.GetUserCount(bot)
                )}\`\`\``,
                true
            )
            .setFooter({
              name: `Ch1llz - Making Ch1ll Studio Better • ${bot.config.bot.Embed.Footer}`
            })
            .setColor(bot.config.bot.Embed.Color)
            .setTimestamp();

        interaction.editReply({
          content: "🏓 | Pong!",
          embeds: [StatsEmbed]
        });
    },
};
