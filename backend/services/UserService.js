const { models } = require("../sequelize");
const bcrypt = require("bcrypt");
const User = require("../sequelize/models/User");

//Hash the password and save the user into the database
const registerUser = async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const emailExists = await models.user.findOne({
        where: { email: user.email },
    });
    if (emailExists) {
        return { code: 200, message: { error: "Email already exists" } };
    }
    const insert = await models.user
        .create({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: hashedPassword,
        })
        .catch((err) => {
            return err;
        });
    return { code: 200, message: insert };
};

const authenticateUser = async (email, password) => {
    const user = await models.user.findOne({ where: { email: email } });
    if (!user) {
        return {
            code: 200,
            message: {
                error: "We couldn't find an account associated with that email",
            },
        };
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
        return {
            code: 200,
            message: "Login successful",
        };
    }
    return {
        code: 200,
        message: "Incorrect password",
    };
};

module.exports = {
    registerUser,
    authenticateUser,
};
