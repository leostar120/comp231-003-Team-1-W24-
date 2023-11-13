let mongoose = require('mongoose');

// create a model class

let ProductModel = mongoose.Schema({
    incident: String,
    description: String,
    date: String
},

{
collection:"incident"

});
module.exports = mongoose.model('Byproduct',ProductModel);