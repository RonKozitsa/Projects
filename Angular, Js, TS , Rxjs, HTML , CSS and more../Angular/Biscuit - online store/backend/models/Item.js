const mongoose = require ('mongoose');

const itemSchema = mongoose.Schema({
    name: String,
    description: String,
    productType: String,
    pictureURL: String,
    price: Number,
    animalType: String
});

module.exports = mongoose.model('Item', itemSchema);

