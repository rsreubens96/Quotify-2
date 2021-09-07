const { models } = require("../sequelize");

//Save the quote into the database
const createQuote = async (quote) => {
    insert = await models.quote
        .create({
            quote: quote.quote,
            saidTo: quote.saidTo,
            upvotes: quote.upvotes,
        })
        .catch((err) => {
            return err;
        });

    return insert;
};

module.exports = {
    createQuote,
};
