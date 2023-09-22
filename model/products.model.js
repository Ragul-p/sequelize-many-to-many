const Sequelize = require("sequelize");
const db = require("../config/db");

const productsSchema = {
    productName: {
        type: Sequelize.DataTypes.STRING,
    }
}


const Product = db.define("products", productsSchema, {
    timestamps: false
});



module.exports = Product;