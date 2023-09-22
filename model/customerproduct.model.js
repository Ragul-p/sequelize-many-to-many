const Sequelize = require("sequelize");
const db = require("../config/db");



const customerProductSchema = {
    customerProductId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}


const CustomerProduct = db.define("customerproduct", customerProductSchema, {
    timestamps: false
});




module.exports = CustomerProduct;