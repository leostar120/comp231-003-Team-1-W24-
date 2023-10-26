let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Business Contact List Us page. */
router.get('/businesscontactlist', indexController.displayBusinesscontactlistPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* GET Contact Us page. */
router.get('/login', indexController.displayLoginPage);

/* GET Login POst Process */
router.get('/login', indexController.processLoginPage);

/* GET Register Page */
router.get('/register', indexController.displayRegisterpage);

/* GET Register POST Page */
router.get('/register', indexController.processRegisterPage);

/* PERFORM LOGOUT */
router.get('/logout', indexController.performLogout);



module.exports = router;
