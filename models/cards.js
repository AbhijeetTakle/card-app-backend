const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  cardName: { type: String, required: true },
  cardVideo: { type: String, required: true },
  cardBasket: { type: String, required: true },
});

const cardModel = mongoose.model("cards", cardSchema);

module.exports = { cardModel, cardSchema };
