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

exports.postProducts = async (req, res, next) => {
  console.log(req.body);
  const imageUrl = req.body.imageUrl;
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl
  });
  try {
    await product.save();
    //   const user = await User.findById(req.userId);
    //   user.posts.push(post);
    //   await user.save();
    res.status(201).json({
      message: 'Post created successfully!',
      product: product
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
