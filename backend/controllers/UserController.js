/**
 * Controller for the user endpoint
 */
const UserService = require("../services/UserService");

const register = async (req, res) => {
    user = req.body;
    const { code, message } = await UserService.registerUser(user);
    return res.status(code).send(message);
};

const authenticate = async (req, res) => {
    const { email, password } = req.body;
    const { code, message } = await UserService.authenticateUser(
        email,
        password
    );
    return res.status(code).send(message);
};

module.exports = {
    register,
    authenticate,
};
