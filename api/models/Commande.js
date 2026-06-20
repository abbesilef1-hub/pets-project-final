const mongoose = require("mongoose");
const schema = mongoose.Schema;

const commandeSchema = new schema (
   {
      imgproduct: {
         type: String,
         required: true,
      },

      product: {
         type: String,
         required: true,
      },

      quantity: {
         type: Number,
         min: 1,
      },

      price: {
         type: Number,
         required: true,
      },

      nameuser: {
         type: String,
         required: true,
      },

      status: {
         type: String,
         enum: ["Not Confirmed", "Confirmed"],
         default: "Not Confirmed",
      },

      date: {
         type: Date,
         default: Date.now,
      },
   },
   // {
   //    timestamps: true
   // }
);

const Commande = mongoose.model('Commande', commandeSchema);
module.exports=Commande;