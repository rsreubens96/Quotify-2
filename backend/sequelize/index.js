const dbConfig = require("../config/dbConfig.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

const modelDefiners = [
    require("./models/User"),
    require("./models/Quote"),
    // Add more models here...
    // require('./models/item'),
];

const sync = async () => {
    await sequelize.sync();
};

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

sync();
console.log("All models were synchronized successfully.");

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
