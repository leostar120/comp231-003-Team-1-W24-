let mongoose = require('mongoose');

// create a model class

let ProductModel = mongoose.Schema({
    item: String,
    description: String,
    price: String
},

{
collection:"shopping"

});
module.exports = mongoose.model('Byproduct',ProductModel);