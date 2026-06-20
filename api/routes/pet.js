const express=require("express");
const Pet = require("../models/Pet");
const petRouter=express.Router();

//add pet
petRouter.post("/add", async(req, res)=>{
    try {
        let newpet=new Pet(req.body);
        let result=await newpet.save();
        res.send({pet:result, msg:"Pet is Added"});
    } catch (error) {
        console.log(error)
    }
})

// get all pet
petRouter.get("/", async(req, res)=>{
    try {
        let result=await Pet.find();
        res.send({pets:result, msg:"All Pets"});
    } catch (error) {
        console.log(error)
    }
})

// get one pet
petRouter.get("/:id", async(req, res)=>{
    try {
        let result=await Pet.findById(req.params.id);
        res.send({pet:result, msg:"One Pet"});
    } catch (error) {
        console.log(error)
    }
})

// delete pet
petRouter.delete("/:id", async(req, res)=>{
    try {
        let result=await Pet.findByIdAndDelete(req.params.id);
        res.send({msg:"Pet is Deleted"});
    } catch (error) {
        console.log(error)
    }
})

// update pet
petRouter.put("/:id", async(req, res)=>{
    try {
        let result=await Pet.findByIdAndUpdate(
            {_id:req.params.id},
            {$set:{...req.body}}
        );
        res.send({pet:result, msg:"Pet is Updated"});
    } catch (error) {
        console.log(error)
    }
})



module.exports=petRouter;