const express=require("express");
const Request = require("../models/Request");
const requestRouter=express.Router();

//add request
requestRouter.post("/add", async(req, res)=>{
    try {
        let newrequest=new Request(req.body);
        let result=await newrequest.save();
        res.send({request:result, msg:"Request is Added"});
    } catch (error) {
        console.log(error)
    }
})

// get all request
requestRouter.get("/", async(req, res)=>{
    try {
        let result=await Request.find();
        res.send({requests:result, msg:"All Requests"});
    } catch (error) {
        console.log(error)
    }
})

// get one request
requestRouter.get("/:id", async(req, res)=>{
    try {
        let result=await Request.findById(req.params.id);
        res.send({request:result, msg:"One Request"});
    } catch (error) {
        console.log(error)
    }
})

// delete request
requestRouter.delete("/:id", async(req, res)=>{
    try {
        let result=await Request.findByIdAndDelete(req.params.id);
        res.send({msg:"Request is Deleted"});
    } catch (error) {
        console.log(error)
    }
})

// update request
requestRouter.put("/:id", async(req, res)=>{
    try {
        let result=await Request.findByIdAndUpdate(
            {_id:req.params.id},
            {$set:{...req.body}}
        );
        res.send({request:result, msg:"Request is Updated"});
    } catch (error) {
        console.log(error)
    }
})


module.exports=requestRouter;