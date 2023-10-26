let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let productController = require('../controllers/Byproduct');

// helper function for guard purposes

function requireAuth(req, res, next)
{
    // check if the user is logged in 
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
}




// connect with our model
let ByProduct = require('../models/Byproduct');



/* Get route for the Data List Page - READ OPERATION */
router.get('/',  async (req, res, next) => {
    try {
        const ProductList = await ByProduct.find();
        res.render('list', { title: 'Business Contact List', productlist: ProductList });
    } catch (err) {
        console.error(err);
        next(err); // Pass the error to the error handling middleware
    }
});

/* GET route for displaying ADD Page - CREATE OPERATION */
router.get('/add', (req, res, next) => {
    res.render('add', { title: 'Add' });
});

/* POST route for processing ADD Page - CREATE OPERATION */
router.post('/add', (req, res, next) => {
    const newUser = new ByProduct({
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
});

/* GET route for displaying EDIT Page - UPDATE OPERATION */
router.get('/edit/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const userToEdit = await ByProduct.findById(id);
        res.render('edit', { title: 'Edit User', user: userToEdit });
    } catch (err) {
        console.error(err);
        next(err); // Pass the error to the error handling middleware
    }
});

/* POST route for processing EDIT Page - UPDATE OPERATION */
router.post('/edit/:id',requireAuth, (req, res, next) => {
    const id = req.params.id;

    const updateUser = user ({
        "_id": id,
        "Name": req.body.name,
        "expiry": req.body.expiry,
        "Description": req.body.Description
    });

    ByProduct.findByIdAndUpdate(id, updateUser)
        .then(() => {
            res.redirect('/data');
        })
        .catch((err) => {
            console.log(err);
            res.end(err);
        });
});

/* GET to perform DELETION - DELETE OPERATION */
router.get('/delete/:id', (req, res, next) => {
    const id = req.params.id;

    ByProduct.findByIdAndRemove(id)
        .then(() => {
            res.redirect('/data');
        })
        .catch((err) => {
            console.log(err);
            res.end(err);
        });
});

module.exports = router;
