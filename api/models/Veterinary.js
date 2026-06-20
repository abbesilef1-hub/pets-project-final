const mongoose = require("mongoose");
const schema = mongoose.Schema;

const veterinarySchema = new schema(
    {
        imgvet: {
            type: String,
            required: true,
        },

        namevet: {
            type: String,
            required: true,
        },

        address: {
            type: String,
            required: true,
        },

        city: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        speciality: {
            type: String,
            required: true,
        },

        phone: {
            type: String,
            required: true,
        },

        available: {
            type: String,
            required: true,
        },

        sourceprofile: {
            type: String,
            required: true,
        },
    }
)

const Veterinary = mongoose.model('Veterinary', veterinarySchema);
module.exports=Veterinary;