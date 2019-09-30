const Buyer = require("../models/Buyer");
const mongoose = require("mongoose");
const Item = require("../models/Item");

const addItemToBuyer = (userObjectID, item) => {
  return Buyer.findOneAndUpdate(
    { _id: mongoose.Types.ObjectId(userObjectID) },
    { $push: { Cart: item } }
  );
};


const deleteItemFromBuyer = (userObjectID, item) => {
  
  return Buyer.findOneAndUpdate(
    { _id: mongoose.Types.ObjectId(userObjectID) },
    { $pull: { Cart: item } }
  );
};

isItemExists = itemObjectID => Item.findOne({ _id: itemObjectID });

const addItem = (req, res) => {
  const userObjectID = req.cookies.authToken;
  const itemObjectID = req.params.item_id;
  isItemExists(itemObjectID)
    .then(item => {
      if (item == null) {
        return res.status(404).send("Item does not exists in the database");
      } else {
        addItemToBuyer(userObjectID, item)
          .then(() => {
            return res
              .status(200)
              .send({message: "Added the item successfully to the user"});
          })
          .catch(err => {
            return res.status(404).send("Request Failed" + err);
          });
      }
    })
    .catch(err => {
      return res.status(404).send("Request Failed" + err);
    });
};

const deleteItem = (req, res) => {
  const userObjectID = req.cookies.authToken;
  const itemObjectID = req.params.item_id;
  Buyer.findOne({
    _id: userObjectID,
    Cart:  { $elemMatch: { _id:mongoose.Types.ObjectId(itemObjectID) } } 
  })
    .then(user => {
      if (user == null) {
        return res.status(404).send("Item does not exists in the users cart");
      } else {
        item_object = user.Cart.find(item=>item._id==itemObjectID);
        deleteItemFromBuyer(userObjectID, item_object)
          .then(() => {
            return res
              .status(200)
              .send({message: "Deleted the item successfully from the user's cart" });
          })
          .catch(err => {
            return res.status(404).send("Request Failed" + err);
          });
      }
    })
    .catch(err => {
      return res.status(404).send("Request Failed" + err);
    });
};

const deleteAllItems = (req, res) => {
  const userObjectID = req.cookies.authToken;
  Buyer.find({ _id: userObjectID })
    .then(user => {
      if (user.length === 0) {
        return res.status(404).send("User does not exists");
      } else {
        Buyer.findOneAndUpdate(
          { _id: mongoose.Types.ObjectId(userObjectID) },
          { $set: { Cart: [] } }
        )
          .then(() => {
            return res
              .status(200)
              .send({message: "Deleted all items from the array"});
          })
          .catch(err => {
            return res.status(404).send("Request Failed" + err);
          });
      }
    })
    .catch(err => {
      return res.status(404).send("Request Failed" + err);
    });
};

const getUserCart = (req, res) => {
  return new Promise((resolve, reject) => {
    Buyer.findOne({ _id: req.cookies.authToken })
      .then(user => {
        if (user == null) {
          reject("The user does not exists");
        }
        resolve(user);
      })
      .catch(() => {
        reject("Something went wrong");
      });
  })
    .then(user => {
      return res.status(200).send(user.Cart);
    })
    .catch(err => {
      return res.status(404).send("Request Failed" + err);
    });
};

module.exports = {
  addItem: addItem,
  getUserCart: getUserCart,
  deleteItem: deleteItem,
  isItemExists: isItemExists,
  deleteAllItems: deleteAllItems
};
