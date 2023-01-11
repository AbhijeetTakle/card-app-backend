const mongoose = require("mongoose");
const { cardModel } = require("../models/cards");

const createCard = async (req, res) => {
  const cardName = req.body.cardName;
  const cardVideo = req.body.cardVideo;
  const cardBasket = req.body.cardBasket;
  await cardModel.create({ cardName, cardVideo, cardBasket }, (err, doc) => {
    if (err) {
      res.json({ message: err, success: false });
    } else {
      res.json({ message: "card created.", success: true, doc });
    }
  });
};

const editCard = async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.cardId);
  const cardName = req.body.cardName;
  const cardVideo = req.body.cardVideo;
  const cardBasket = req.body.cardBasket;
  await cardModel
    .updateOne({ _id: id }, { cardName, cardVideo, cardBasket })
    .then((result) => {
      res.json({ message: "card edited.", success: true, result });
    })
    .catch((err) => {
      res.json({ message: err, success: false });
    });
};

const deleteCard = async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.cardId);
  await cardModel
    .deleteOne({ _id: id })
    .then((result) => {
      res.json({ message: "card deleted.", success: true, result });
    })
    .catch((err) => {
      res.json({ message: err, success: false });
    });
};

const getCards = async (req, res) => {
  const basketName = req.params.basketName;
  await cardModel
    .find(basketName === "All" ? {} : { cardBasket: basketName })
    .then((cards) => {
      res.json({ message: "cards delivered.", success: true, cards });
    })
    .catch((err) => {
      res.json({ message: err, success: false });
    });
};

const getCard = async (req, res) => {
  const cardId = req.params.cardId;
  await cardModel
    .findOne({ _id: cardId })
    .then((card) => {
      res.json({ message: "cards delivered.", success: true, card });
    })
    .catch((err) => {
      res.json({ message: err, success: false });
    });
};

module.exports = { getCards, createCard, editCard, deleteCard, getCard };
