const express=require("express");
const Product = require("../models/Product");
const productRouter=express.Router();

//add product
productRouter.post("/add", async(req, res)=>{
    try {
        let newproduct=new Product(req.body);
        let result=await newproduct.save();
        res.send({product:result, msg:"Product is Added"});
    } catch (error) {
        console.log(error)
    }
})

// get all product
productRouter.get("/", async(req, res)=>{
    try {
        let result=await Product.find();
        res.send({products:result, msg:"All Products"});
    } catch (error) {
        console.log(error)
    }
})

// get one product
productRouter.get("/:id", async(req, res)=>{
    try {
        let result=await Product.findById(req.params.id);
        res.send({product:result, msg:"One Product"});
    } catch (error) {
        console.log(error)
    }
})

// delete product
productRouter.delete("/:id", async(req, res)=>{
    try {
        let result=await Product.findByIdAndDelete(req.params.id);
        res.send({msg:"Product is Deleted"});
    } catch (error) {
        console.log(error)
    }
})

// update product
productRouter.put("/:id", async(req, res)=>{
    try {
        let result=await Product.findByIdAndUpdate(
            {_id:req.params.id},
            {$set:{...req.body}}
        );
        res.send({product:result, msg:"Product is Updated"});
    } catch (error) {
        console.log(error)
    }
})



module.exports=productRouter;