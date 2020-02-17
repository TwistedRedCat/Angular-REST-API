const { validationResult } = require('express-validator/check');
const fs = require('fs');
const path = require('path');

const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(result => {
      res.status(200).json({ message: 'Here you go', products: result });
    })
    .catch(err => {
      if (!err.statusCode) {
        const err = new Error('Database fail. We are working to fix this');
        err.statusCode = 500;
        throw err;
      }
    });
};
