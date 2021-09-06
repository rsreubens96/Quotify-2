const User = require("../models/User");
const UserService = require("../services/UserService");

const register = async (req, res) => {
    result = await UserService.registerUser();
    return res.status(200).send(result);
};

module.exports = {
    register,
};
