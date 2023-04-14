const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const StrategyGameSchema = new Schema({
    gameId: { type: Number, required: true, unique: true },
    title: { type: String, trim: true, required: true },
    short_description: { type: String, trim: true, required: true },
    genre: { type: String },
    platform: { type: String },
    publisher: { type: String },
    developer: { type: String },
    released: { type: String },

    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("strategyGame", StrategyGameSchema);