const { DataTypes } = require("sequelize");

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
    sequelize.define("quote", {
        quote: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        saidTo: {
            type: DataTypes.STRING,
        },
        upvotes: {
            type: DataTypes.INTEGER,
        },
        dateSaid: {
            type: DataTypes.DATE,
        },
    });
};
