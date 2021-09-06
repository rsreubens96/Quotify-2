const { models } = require("../models/");

const registerUser = async () => {
    console.log("REGISTEIRNG!");
    insert = await models.user
        .create({
            firstName: "Reuben",
            lastName: "Sarkar",
            email: "rsreubens96@gmail.com",
            password: "password",
        })
        .catch((err) => {
            return err;
        });
    return insert;
};

module.exports = {
    registerUser,
};
