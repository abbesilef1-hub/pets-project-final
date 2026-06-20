const mongoose = require("mongoose");
const schema = mongoose.Schema;

const petSchema = new schema(
    {
        image: {
            type: String,
        },

        name: {
            type: String,
        },

        type: {
            type: String,
        },

        category: {
            type: String,
            enum: ["Dog", "Cat"],
        },

        description: {
            type: String,
        },

        race: {
            type: String,
        },

        age: {
            value: {
                type: Number,
            },

            unit: {
                type: String,
                enum: ["Months", "Years"],
            }
        },

        role: {
            type: String,
            enum: ["Sell", "Adoption"],
        },

        price: {
            type: Number,
            default: 0,
        },

        owner: {
            type: String,
        },

        phone: {
            type: String,
        },
    }
)

const Pet = mongoose.model('Pet', petSchema);
module.exports=Pet;