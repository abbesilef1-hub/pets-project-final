const mongoose = require("mongoose");

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.DB_URI
        //     {
        //     useUnifiedTopology: true,
        //     useNewUrlParser: true,
        // }
    );
        console.log("Data Base is Connected");
    } catch (error) {
        console.log("Data Base is Not Connected");
    }
};

module.exports = connectDB;