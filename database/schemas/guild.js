const mongoose = require("mongoose");

const config = require("../../globalconfig.json");

const GuildSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  registrationDate: { type: Number, default: Date.now() },

  // Data //
  prefix: { type: String, required: true, trim: true, default: config.prefix || "^" },
  language: { type: String, default: "en" },
  casesCount: { type: Number, default: 0 },
  autoRemoveCommands: { type: Boolean, default: false },

  plugins: {
    welcome: {
      enabled: {
        default: false,
        type: Boolean,
      },
      message: {
        default: "Welcome {mention} to **{server}**! You're our **{members}th member**!",
        type: String,
      },
      channel: {
        type: String,
        default: null,
      },
    },
    goodbye: {
      enabled: {
        default: false,
        type: Boolean,
      },
      message: {
        default: "Bye {mention}! We're really sad to see you go. Without you, we're now **{members} members**.",
        type: String,
      },
      channel: {
        type: String,
        default: null,
      },
    },
    automod: {
      removeLinks: { type: Boolean, default: false },
      removeProfanity: { type: Boolean, default: false },
      removeDuplicateText: { type: Boolean, default: false },
    },
    leveling: {
      enabled: { type: Boolean, default: false },
      max: { type: Number, default: 25 },
      min: { type: Number, default: 5 },
    },
    chatbot: { type: String, default: false },
  },
});

const GuildData = new mongoose.model("Guild", GuildSchema);

module.exports = GuildData;
