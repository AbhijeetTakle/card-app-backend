const mongoose = require("mongoose");
const historySchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
  time: { type: Number, required: true },
});

const historyModel = mongoose.model("history", historySchema);

module.exports = { historyModel, historySchema };
