const router = require('express').Router();
const productModel = require('../models/product.js');
const path = require('path');

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

router.route('/:product_id')
  .get(productModel.getOneProduct, sendAsJSON)
  .put(productModel.editProduct, sendAsJSON)
  .delete(productModel.deleteProduct, sendAsJSON);

router.route('/')
  .get(productModel.getAllProducts, sendAsJSON)
  .post(productModel.createProduct, sendAsJSON);



module.exports = router;
