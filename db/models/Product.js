const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    slug: String,
    image: String,
    description: String,
    color: String,
    quantity: Number,
    price: Number
})

module.exports = mongoose.model("Product",ProductSchema);