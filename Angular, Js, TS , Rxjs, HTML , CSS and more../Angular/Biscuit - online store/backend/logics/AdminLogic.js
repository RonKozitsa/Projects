const Buyer = require('../models/Buyer');
const Item = require('../models/Item');
const filterUserByObjectId = (req, res) => {
  objectid = req.params.objectid
  isUserExists(objectid)
    .then(user => {
      if (user === null) {
        return res.status(404).send("User does not exists in the database");
      } else {
        return res.status(200).send(user);
      }
    })
    .catch(() => {
      return res.status(404).send("Something is wrong with the request");
    });
};

isUserExists = (objectid) => Buyer.findOne({ _id: objectid})      

const getAllItems = (req, res) => {
    Item.find({})
      .then(allItems => {
        return res.status(200).send(allItems);
      })
      .catch(() => {
        return res.status(404).send("Something is wrong with the request");
      });
  };

  const getAllUser = (req, res) => {
    Buyer.find({})
      .then(allUser => {
        return res.status(200).send(allUser);
      })
      .catch(() => {
        return res.status(404).send("Something is wrong with the request");
      });
  };
  
addItem = (req, res) => {
    let item = new Item({
      name: req.body.name,
      desc: req.body.desc,
      productType: req.body.productType,
      pictureURL: req.body.pictureURL,
      price: req.body.price,
      animalType: req.body.animalType
    });
    item
      .save()
      .then(() => {
        return res.status(200).send("The item added successfully to DB");
      })
      .catch(() => {
        return res.status(404).send("Request Failed");
      });
  };

deleteUser = (req, res) => {
    objectid = req.params.objectid;
    isUserExists(objectid).then((user)=>{
      if(user == null){
        return res.status(404).send("User not found");
      }else{
        Buyer.deleteOne({ _id: req.params.objectid })
        .then(() => {
          return res.status(200).send("The user deleted successfully");
        })
        .catch((err) => {
          return res.status(404).send("Request Failed" + err);
        });
      }
    }).catch((err)=>{
        return res.status("Request failed" + err);
    });
  };

  filterByNameLastName = (req, res) => {
    userName = req.params.userName;
    Buyer.findOne({ ID: userName })
      .then(user => {
        if (user === null) {
          return res.status(200).send([]);
        } else {
          return res.status(200).send([user]);
        }
      })
      .catch(() => {
        return res.status(404).send("Something is wrong with the request");
      });
  }; 

  deleteAllUsers = (req, res) => {
    Buyer.deleteMany({})
      .then(() => {
        return res.status(200).send("The user deleted successfully");
      })
      .catch(err => {
        return res.status(404).send("Request Failed" + err);
      });
  };

module.exports = {
    getAllUser: getAllUser,
    filterUserByObjectId : filterUserByObjectId,
    getAllItems: getAllItems,
    addItem: addItem,
    deleteUser : deleteUser,
    filterByNameLastName: filterByNameLastName,
    deleteAllUsers: deleteAllUsers
}