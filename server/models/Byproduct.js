let mongoose = require('mongoose');

// create a model class

let ProductModel = mongoose.Schema({
    name: String,
    contact: String,
    emailaddress: String
},

{
collection:"business"

});
module.exports = mongoose.model('Byproduct',ProductModel);