/**
 * Controller for the quote endpoint
 */
const QuoteService = require("../services/QuoteService");

const create = async (req, res) => {
    quote = req.body;
    result = await QuoteService.createQuote(quote);
    return res.status(200).send(result);
};

module.exports = {
    create,
};
