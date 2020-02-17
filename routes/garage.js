const express = require('express');
const router = express.Router();

const { body } = require('express-validator/check');

const garageController = require('../controllers/garage');

router.get('/', garageController.getProducts);

module.exports = router;
