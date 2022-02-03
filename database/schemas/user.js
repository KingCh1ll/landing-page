const mongoose = require("mongoose");

function GenerateToken() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwzy0123456789.-_";
  let token = "CS-";

  for (let i = 0; i < 32; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return token;
}

const Schema = new mongoose.Schema({
  // User //
  id: { type: String },

  // Information //
  bio: { type: String },
  birthday: { type: Number },

  // Stats //
  registrationDate: { type: Number, default: Date.now() },

  // Data //
  APIToken: { type: String, default: GenerateToken() },
  cooldowns: { type: String, default: null },
  afk: { type: String, default: null },
  money: {
    balance: { type: Number, default: 0 },
    bank: { type: Number, default: 0 },
    bankMax: { type: Number, default: 0 },
    multiplier: { type: Number, default: 0 }
  },
  inventory: {}
});

Schema.method("GenerateAPIToken", async () => {
  this.APIToken = GenerateToken();

  data.guild.markModified("APIToken");
  await this.save();
  return this.APIToken;
});

module.exports = mongoose.model("User", Schema);
