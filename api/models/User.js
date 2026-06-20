const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema(
    {
        name: {
            type: String,
            required: true,
        },

        lastName: {
            type: String,
            required: true,
        },

        phone: {
            type: String,
        },

        address: {
            type: String,
        },

        role: {
            type: String,
            default: "User",
        },

        email: {
            type: String,
            required: true,
        },

        password: {
            type: String,
            required: true,
        },
    }
)

const User = mongoose.model('User', userSchema);
module.exports=User;