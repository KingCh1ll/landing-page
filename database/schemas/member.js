const mongoose = require("mongoose");

const config = require("../../globalconfig.json");

module.exports = mongoose.model(
  "Member",
  new mongoose.Schema({
    // User Information //
    id: { type: String },
    guildID: { type: String },

    // Information //
    bio: { type: String },
    birthday: { type: Number },

    // Stats //
    registrationDate: { type: Number, default: Date.now() },

    // Data //
    xp: { type: Number, default: 0 },
    level: { type: Number, default: 0 },

    infractions: { type: Array, default: [] },
    infractionsCount: { type: Number, default: 0 },
    mute: {
      type: Object,
      default: { muted: false, case: null, endDate: null },
    },
  }),
);
