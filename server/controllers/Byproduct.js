let express = require('express');
 let router = express.Router();
let mongoose= require('mongoose');

// create a reference  to the model

let Byproduct = require('../models/Byproduct');

module.exports.displayProductList = async (req, res, next) => {
    try {
        const ProductList = await ByProduct.find();
        res.render('list', { title: 'Data', productlist: ProductList });
    } catch (err) {
        console.error(err);
        next(err); // Pass the error to the error handling middleware
    }
};