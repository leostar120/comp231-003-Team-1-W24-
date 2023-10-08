var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'home' });
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'about' });
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'services' });
});

/* GET Contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'contact' });
});

router.get('/cv', function(req, res, next) {
  res.download('/public/images/resume.pdf');
});

module.exports = router;
