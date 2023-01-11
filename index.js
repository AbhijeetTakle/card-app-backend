const express = require("express");
const cors = require("cors");
const connectdb = require("./connectdb");
const cardsAPI = require("./routes/cards");
const historyAPI = require("./routes/history");
const basketAPI = require("./routes/basket");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

connectdb();

app.use("/", cardsAPI);
app.use("/", historyAPI);
app.use("/", basketAPI);
app.use("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.listen(process.env.PORT, () => {
  console.log("API Launched...");
});
