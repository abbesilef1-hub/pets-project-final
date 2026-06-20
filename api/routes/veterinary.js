const express=require("express");
const Veterinary = require("../models/Veterinary");
const veterinaryRouter=express.Router();

//add veterinary
veterinaryRouter.post("/add", async(req, res)=>{
    try {
        let newveterinary=new Veterinary(req.body);
        let result=await newveterinary.save();
        res.send({veterinary:result, msg:"Veterinary is Added"});
    } catch (error) {
        console.log(error)
    }
})

// get all veterinary
veterinaryRouter.get("/", async(req, res)=>{
    try {
        let result=await Veterinary.find();
        res.send({veterinary:result, msg:"All Veterinary"});
    } catch (error) {
        console.log(error)
    }
})

// get one veterinary
veterinaryRouter.get("/:id", async(req, res)=>{
    try {
        let result=await Veterinary.findById(req.params.id);
        res.send({product:result, msg:"One Veterinary"});
    } catch (error) {
        console.log(error)
    }
})

// delete veterinary
veterinaryRouter.delete("/:id", async(req, res)=>{
    try {
        let result=await Veterinary.findByIdAndDelete(req.params.id);
        res.send({msg:"Veterinary is Deleted"});
    } catch (error) {
        console.log(error)
    }
})

// update vetrinary
veterinaryRouter.put("/:id", async(req, res)=>{
    try {
        let result=await Veterinary.findByIdAndUpdate(
            {_id:req.params.id},
            {$set:{...req.body}}
        );
        res.send({vetrinary:result, msg:"Veterinary is Updated"});
    } catch (error) {
        console.log(error)
    }
})



module.exports=veterinaryRouter;