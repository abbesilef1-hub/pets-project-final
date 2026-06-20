const mongoose = require("mongoose");
const schema = mongoose.Schema;
const productSchema = new schema(
    {
        image: {
            type: String,
            required: true,
        },

        name: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            enum: ["Food", "Toys", "Accessory"],
            required: true,
        },

        petType: {
            type: String,
            enum: ["Dog", "Cat", "Both"],
            required: true,
        },

        brand: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        stock: {
            type: Number,
            required: true,
            default: 0,
        },
    }
);

const Product = mongoose.model("Product", productSchema)
module.exports = Product;