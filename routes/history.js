const router = require("express").Router();
const { historyModel } = require("../models/history");
router
  .route("/api/history")
  .get(async (req, res) => {
    await historyModel
      .find({})
      .then((result) => {
        res.json({ message: "history delivered.", success: true, result });
      })
      .catch((err) => {
        res.json({ message: err, success: false });
      });
  })
  .post(async (req, res) => {
    const name = req.body.name;
    const link = req.body.link;
    const time = req.body.time;

    await historyModel.create({ name, link, time }, (err, doc) => {
      if (err) {
        res.json({ message: err, success: false });
      } else {
        res.json({ message: "history created.", success: true, doc });
      }
    });
  });

module.exports = router;
