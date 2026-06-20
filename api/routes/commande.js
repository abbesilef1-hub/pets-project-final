const express=require("express");
const Commande = require("../models/Commande");
const commandeRouter=express.Router();

//add commande
commandeRouter.post("/add", async(req, res)=>{
    try {
        let newcommande=new Commande(req.body);
        let result=await newcommande.save();
        res.send({commande:result, msg:"Commande is Added"});
    } catch (error) {
        console.log(error)
    }
})

// get all commande
commandeRouter.get("/", async(req, res)=>{
    try {
        let result=await Commande.find();
        res.send({commandes:result, msg:"All Commandes"});
    } catch (error) {
        console.log(error)
    }
})

// get one commande
commandeRouter.get("/:id", async(req, res)=>{
    try {
        let result=await Commande.findById(req.params.id);
        res.send({commande:result, msg:"One Commande"});
    } catch (error) {
        console.log(error)
    }
})

// delete commande
commandeRouter.delete("/:id", async(req, res)=>{
    try {
        let result=await Commande.findByIdAndDelete(req.params.id);
        res.send({msg:"Commande is Deleted"});
    } catch (error) {
        console.log(error)
    }
})

// update commande
commandeRouter.put("/:id", async(req, res)=>{
    try {
        let result=await Commande.findByIdAndUpdate(
            {_id:req.params.id},
            {$set:{...req.body}}
        );
        res.send({commande:result, msg:"Commande is Updated"});
    } catch (error) {
        console.log(error)
    }
})


module.exports=commandeRouter;