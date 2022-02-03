const Discord = require("discord.js");

const UserS = require("./schemas/user");
const MemberS = require("./schemas/member");
const GuildS = require("./schemas/guild");

module.exports = {
  async init(bot) {
    this.client = bot;
  },

  async getUser(UserID) {
    let data = await UserS.findOne({
      id: UserID,
    });

    if (data) {
      return data;
    } else {
      data = new UserS({
        id: UserID,
      });

      return data;
    }
  },

  async getMember(MemberID, GuildID) {
    let member = await MemberS.findOne({
      id: MemberID,
      guildID: GuildID,
    });

    if (member) {
      return member;
    } else {
      member = new MemberS({
        id: MemberID,
        guildID: GuildID,
      });

      return member;
    }
  },

  async getGuild(GuildID) {
    let guild = await GuildS.findOne({
      id: GuildID,
    });

    if (guild) {
      return guild;
    } else {
      guild = new GuildS({
        id: GuildID,
      });

      return guild;
    }
  },
};
