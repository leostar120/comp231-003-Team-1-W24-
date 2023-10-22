let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connect with our model
let ByProduct = require('../models/Byproduct')

router.get('/', (req, res, next) => {
    ByProduct.find()
      .then((ProductList) => {
        res.render('Byproduct', { title: 'ByProducts', productlist: ProductList });
      })
      .catch((err) => {
        console.error(err);
      });
  });
  

  
module.exports = router;

