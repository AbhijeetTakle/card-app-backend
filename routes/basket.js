const router = require("express").Router();
const mongoose = require("mongoose");
const { basketModel } = require("../models/basket");
const { cardModel } = require("../models/cards");
router
  .route("/api/basket")
  .get(async (req, res) => {
    await basketModel
      .find({})
      .then((result) => {
        res.json({ message: "baskets delivered.", success: true, result });
      })
      .catch((err) => {
        res.json({ message: err, success: false });
      });
  })
  .post(async (req, res) => {
    const name = req.body.name;

    await basketModel.create({ name }, (err, doc) => {
      if (err) {
        res.json({ message: err, success: false });
      } else {
        res.json({ message: "basket created.", success: true, doc });
      }
    });
  });
router
  .route("/api/basket/:basketId")
  .patch(async (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.basketId);
    const name = req.body.basketName;
    await basketModel.findOne({ _id: id }).then(async (result) => {
      await cardModel.updateMany(
        { cardBasket: result.name },
        { cardBasket: name }
      );
    });
    await basketModel
      .updateOne({ _id: id }, { name })
      .then((result) => {
        res.json({ message: "basketd updated", success: true, result });
      })
      .catch((err) => {
        res.json({ message: err, success: false });
      });
  })
  .delete(async (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.basketId);
    await basketModel.findOne({ _id: id }).then(async (result) => {
      await cardModel.deleteMany({ cardBasket: result.name });
    });
    await basketModel
      .deleteOne({ _id: id })
      .then((result) => {
        res.json({ message: "basket deleted.", success: true, result });
      })
      .catch((err) => {
        res.json({ message: err, success: false });
      });
  })
  .get(async (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.basketId);
    await basketModel
      .findOne({ _id: id })
      .then(async (result) => {
        res.json({ message: "basket delivered.", success: true, result });
      })
      .catch((err) => {
        res.json({ message: err, success: false });
      });
  });

module.exports = router;
