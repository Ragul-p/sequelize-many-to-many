const Sequelize = require("sequelize");
const db = require("../config/db");



const customerSchema = {
    customerName: {
        type: Sequelize.DataTypes.STRING,
    }
}


const Customer = db.define("customer", customerSchema, {
    timestamps: false
});




module.exports = Customer;