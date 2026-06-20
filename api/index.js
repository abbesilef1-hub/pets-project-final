// console.clear();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require('./config/dbConnect')
require("dotenv").config();
// connect to DB
connectDB();

// routes
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => res.send ("Express on Vercel"));
app.use("/user", require("./routes/user"));
app.use("/pet", require("./routes/pet"));
app.use("/request", require("./routes/request"));
app.use("/product", require("./routes/product"));
app.use("/commande", require("./routes/commande"));
app.use("/veterinary", require("./routes/veterinary"));


// server
const PORT =process.env.PORT;
app.listen(PORT, (err)=>err ? console.log(err):console.log(`Server in Running on ${PORT}`))