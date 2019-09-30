const Buyer = require('../models/Buyer');
const mongoose = require('mongoose');

setStatus = (req, res) => {
  const userObjectID = req.params._id;
  const status = req.params.status;
  Buyer.findOneAndUpdate({ _id: mongoose.Types.ObjectId(userObjectID) }, { $set: { Status: status } }).then(() => {
    return res.status(200).send({ message: "Status field of the buyer updated successfully" });
  }).catch((err) => {
    return res.status(404).send("Request Failed" + err);
  });
}

module.exports = { setStatus: setStatus };
