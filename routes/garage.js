const express = require('express');
const router = express.Router();

const { body } = require('express-validator/check');

const garageController = require('../controllers/garage');

router.get('/', garageController.getProducts);

router.post('/add-item', garageController.postProducts);

module.exports = router;


//"start": "Node_ENV=production node app.js",