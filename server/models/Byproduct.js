let mongoose = require('mongoose');

// create a model class

let ProductModel = mongoose.Schema({
    Name: String,
    expiry: String,
    Description: String
},
{
collection:"FirstAid"
});
module.exports = mongoose.model('ByProduct',ProductModel);