const Sequelize = require("sequelize");

module.exports = new Sequelize("wyf", "postgres", "root", {
    dialect: "postgres"
})