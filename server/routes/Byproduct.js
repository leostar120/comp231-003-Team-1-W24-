let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connect with our model
let ByProduct = require('../models/Byproduct');
const Byproduct = require('../models/Byproduct');

/* Get route for the Data List Page - READ OPERATION */
router.get('/', (req, res, next) => {
    ByProduct.find()
      .then((ProductList) => {
        res.render('list', { title: 'Data', productlist: ProductList });
      })
      .catch((err) => {
        console.error(err);
      });
  });

  /* GET route for displaying ADD Page - CREATE OPERATION */
  router.get('/add', (req, res, next) => {
    res.render('add', { title: 'Add' });
  });
  

  /* POST route for processing ADD Page - CREATE OPERATION */
  router.post('/add', (req, res, next) => {
    let newUser = Byproduct ({
        "name": req.body.name,
        "expiry": req.body.expiry,
        "Description": req.body.Description
    });

    Byproduct.create(newUser, (err, Byproduct) => {
      if(err)
      {
        console.log(err);
        res.end(err);
      }
      else
      {
        res.redirect('/data');
      }
    });

  });

  /* GET route for displaying EDIT Page - UPDATE OPERATION */
  router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Byproduct.findId(id, (err, userToEdit) => {
      if(err)
      {
        console.log(err)
        res.end(err);
      }
      else
      {
        // show the edit view
        res.render('edit', {title: 'Edit User', user: userToEdit})
      }
    });
    
  });

  /* POST route for processing EDIT Page - UPDATE OPERATION */
  router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id

    let updateUser = ByProduct({
         "_id": id,
        "name": req.body.name,
        "expiry": req.body.expiry,
        "Description": req.body.Description
    });

    Byproduct.updateOne({_id: id}, updateUser, (err) => {
      if(err)
      {
        console.log(err);
        res.end(err);
      }
      else
      {

        // refresh the datalist
        res.redirect('data');
      }
    });
  });

  /* GET to perform DELETION - DELETE OPERATION */
  router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    ByProduct.remove({_id: id}, (err) => {
      if(err)
      {
        console.log(err);
        res.end(err);
      }
      else
      {

         // refresh the datalist
         res.redirect('data');

      }

    });
});

  
module.exports = router;

