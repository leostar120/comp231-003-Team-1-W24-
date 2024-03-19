
let express = require('express');

 let router = express.Router();

let mongoose= require('mongoose');

// create a reference  to the model

let Byproduct = require('../models/Byproduct');

module.exports.displayProductList = async (req, res, next) => {
    try {
        const ProductList = await Byproduct.find();
        res.render('list', { title: 'Shopping list', 
        productlist: ProductList, 
        displayName: req.user ? req.user.displayName : '' });
    } catch (err) {
        console.error(err);
        next(err); // Pass the error to the error handling middleware
    }
}

module.exports.displayShoppingCart = async (req, res, next) => {
    try {
        const ProductList = await Byproduct.find();
        res.render('list', { title: 'Shopping Cart', 
        productlist: ProductList, 
        displayName: req.user ? req.user.displayName : '' });
    } catch (err) {
        console.error(err);
        next(err); // Pass the error to the error handling middleware
    }
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('add', { title: 'Add Contact List',
    displayName: req.user ? req.user.displayName : ''  });
}

module.exports.performDelete = (req, res, next) => {
    const id = req.params.id;

    Byproduct.findByIdAndRemove(id)
        .then(() => {
            res.redirect('/data');
        })
        .catch((err) => {
            console.log(err);
            res.end(err);
        });
}

module.exports.displayEditPage = async (req, res, next) => {
    try {
        const id = req.params.id;
        const userToEdit = await Byproduct.findById(id);
        res.render('edit', { title: 'Edit User', user: userToEdit,
        displayName: req.user ? req.user.displayName : ''  });
    } catch (err) {
        console.error(err);
        next(err); // Pass the error to the error handling middleware
    }
}

module.exports.processEditPage = (req, res, next) => {
    const id = req.params.id;

    const updateUser = {
        "name": req.body.name,
        "contact": req.body.contact,
        "emailaddress": req.body.emailaddress
    };

    Byproduct.findByIdAndUpdate(id, updateUser)
        .then(() => {
            res.redirect('/data');
        })
        .catch((err) => {
            console.log(err);
            res.end(err);
        });
}

module.exports.processAddPage = (req, res, next) => {
    const newUser = new Byproduct({
        "name": req.body.name,
        "contact": req.body.contact,
        "emailaddress": req.body.emailaddress
    });

    newUser.save()
        .then((Byproduct) => {
            res.redirect('/data');
        })
        .catch((err) => {
            console.log(err);
            res.end(err);
        });
}