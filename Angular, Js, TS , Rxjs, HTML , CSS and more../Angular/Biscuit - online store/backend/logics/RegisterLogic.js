const Buyer = require("../models/Buyer");
const encryptor = require("../encryption/encryptor");

const register = (req, res) => {
  let buyer = new Buyer({
    ID: req.body.ID,
    Password: encryptor(req.body.Password.trim()),
    Name: req.body.Name,
    LastName: req.body.LastName,
    Email: req.body.Email,
    Cart: []
  });
  buyer
    .save()
    .then(() => {
      return res.status(200).send("The buyer added successfully to DB");
    })
    .catch(err => {
      return res.status(401).send("Request Failed" + err);
    });
};


module.exports = register;