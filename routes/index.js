var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'home'});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'about'});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'contact'});
});

/* GET Contact Us page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'login'});
});

module.exports = router;
