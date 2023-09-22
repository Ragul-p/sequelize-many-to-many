const Sequelize = require("sequelize");
const { Op } = Sequelize;
const Customer = require("../model/customer.model");
const Product = require("../model/products.model");








async function create(req, res) {
    await Customer.bulkCreate([
        { customerName: "a" },
        { customerName: "b" },
        { customerName: "c" },
    ])

    await Product.bulkCreate([
        { productName: "apple" },
        { productName: "ball" },
        { productName: "cliper" },
    ])
    return res.status(200).json({ message: "success" });
}




async function read(req, res) {

    //1.
    // const customer = await Customer.findOne({ where: { customerName: "a" } });
    // const product = await Product.findOne({ where: { productName: "apple" } });
    // customer.addProduct(product);
    // customer.removeProduct(product);
    // const count = customer.countProducts();


    // 2.
    // const product = await Product.findOne({ where: { productName: "apple" } });
    // const customer = await Customer.findAll();
    // product.addCustomers(customer);

    //3.
    // const customer = await Customer.destroy({ where: { customerName: "a" } });
    // const product = await Product.destroy({ where: { productName: "apple" } });


    return res.status(200).json({ count });
}








module.exports = {
    create, read
}
