const mongoose = require("mongoose");
const basketSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

const basketModel = mongoose.model("basket", basketSchema);

module.exports = { basketModel, basketSchema };
