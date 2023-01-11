const router = require("express").Router();
const {
  createCard,
  deleteCard,
  editCard,
  getCards,
  getCard,
} = require("../controllers/cards");

router.route("/api/card/create").post(createCard);
router.route("/api/card/basket/:basketName").get(getCards);
router.route("/api/card/cardId/:cardId").get(getCard);
router.route("/api/card/update/:cardId").delete(deleteCard).patch(editCard);
module.exports = router;
