const mongoose = require("mongoose");
const schema = mongoose.Schema;
const requestSchema = new schema(
    {
        imgpet: {
            type: String,
            required: true,
        },

        namepet: {
            type: String,
            required: true,
        },

        role: {
            type: String,
            enum: ["Sell", "Adoption"],
            required: true,
        },

        price: {
            type: Number,
            default: 0,
        },

        nameowner: {
            type: String,
            required: true,
        },

        user: {
            type: String,
            required: true,
        },
         
        address: {
            type: String,
        },

        phone: {
            type: String,
        },

        status: {
            type: String,
            enum: ["Accepted", "Pending", "Rejected"],
            required: true,
            default: "Pending",
        },

        date: {
            type: Date,
            default: Date.now,
      },
    },

    // {
    //     timestamps: true
    // }
)

const Request = mongoose.model('Request', requestSchema);
module.exports=Request;