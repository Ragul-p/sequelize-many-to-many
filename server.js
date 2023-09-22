const express = require("express");
const dotenv = require("dotenv").config();
const Sequelize = require("sequelize");
const app = express();
const port = process.env.PORT || 5000;
const Products = require("./model/products.model");
const Customers = require("./model/customer.model");
const CustomersProduct = require("./model/customerproduct.model");





const db = require("./config/db");
db.authenticate().then(function () { console.log("DB Connection Successful (:"); })
    .catch(function () { console.log("DB Connection Error !!!"); });


//1.    
// Customers.belongsToMany(Products, { through: 'customerproduct', foreignKey: 'customer_id' })
// Products.belongsToMany(Customers, { through: 'customerproduct', foreignKey: 'product_id' })


Customers.belongsToMany(Products, { through: CustomersProduct, foreignKey: 'customer_id' })
Products.belongsToMany(Customers, { through: CustomersProduct, foreignKey: 'product_id' })

db.sync({ alter: true }).then(function () { console.log("sync Table Successful (:"); })
    .catch(function () { console.log("sync Table Error !!!"); });



app.use("/api/user", require("./router/user.post.route"));



app.listen(port, function () {
    console.log(`server is listening on port ${port}`);
});
