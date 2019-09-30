const Item = require('../models/Item');
const Buyer = require('../models/Buyer');
const mongoose = require('mongoose');

search = (req, res) => {
  const searchedText = req.params.searchedText;
  Item.find({$or:[
        {"productType":{$regex:".*"+ searchedText +".*"}},
        {"name":{$regex:".*"+ searchedText +".*"}},
        {"desc":{$regex:".*"+ searchedText +".*"}}, 
        {"animalType":{$regex:".*"+ searchedText +".*"}}]})
    .then(results => {
        return res.status(200).send(results);
      }
    )
    .catch((err) => {
      return res.status(404).send("Something is wrong with the request:" + err);
    });
  }


const addItemToPurchaseArray = (userObjectID,itemObjectID) => {
  return Buyer.findOneAndUpdate({_id : mongoose.Types.ObjectId(userObjectID)},{ $push: {Purchases: mongoose.Types.ObjectId(itemObjectID)}});    
}

isItemExists = (itemObjectID) => Item.findOne({ _id: itemObjectID})


const addPurchase = (req,res) => {
  const userObjectID = req.user._id;
  const itemObjectID = req.params.item_id;
  isItemExists(itemObjectID).then((item)=>{
    if (item == null) {
      return res.status(404).send("Item does not exists in the database");
    }else{
      addItemToPurchaseArray(userObjectID,itemObjectID).then(()=> {
        return res.status(200).send("Added the item successfully to the user purchase array");
      }).catch((err) => {
        return res.status(404).send("Request Failed" + err);
      });
    }
  }).catch((err) => {
    return res.status(404).send("Request Failed" + err);
  });
}
module.exports = {search: search,
                  addPurchase: addPurchase};