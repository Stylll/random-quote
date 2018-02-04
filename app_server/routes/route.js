/**
*route js file for application
*handles routing links to their right controller
*/
var express = require('express');
var router = express.Router();
var quoteController = require('../controllers/quotecontroller');

//route to controller for GET request on random quotes
router.get('/', quoteController.randomQuotes);


module.exports = router;