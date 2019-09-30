const Buyer = require('../models/Buyer');
const mongoose = require ('mongoose');
const getUserMiddleware =  (req,res,next) => {
    const authToken = req.cookies.authToken;
    getUserByObjectID(authToken).then(user => {
        req.user = user;
        next();
    })
}
const getUserByObjectID = (userObjectID) => Buyer.findOne({_id : mongoose.Types.ObjectId(userObjectID)}); 
module.exports = getUserMiddleware;