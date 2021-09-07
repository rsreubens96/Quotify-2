const express = require("express");
const router = express.Router();
const quoteController = require("../controllers/QuoteController");

router.post("/quotes/create", quoteController.create);

module.exports = router;
