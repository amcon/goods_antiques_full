const router = require('express').Router();
const productModel = require('../models/product.js');
const path = require('path');

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

router.route('/users/:user_id/create')
  .post(productModel.createProduct, productModel.createImage, sendAsJSON);

router.route('/:product_id/:image_id')
  .get(productModel.getOneImage, sendAsJSON)
  .put(productModel.editImage, sendAsJSON)
  .delete(productModel.deleteImage, sendAsJSON);

router.route('/:product_id')
  .get(productModel.getOneProduct, sendAsJSON)
  .put(productModel.editProduct, sendAsJSON)
  .delete(productModel.deleteProduct, sendAsJSON);

router.route('/category/primitive')
  .get(productModel.getAllPrimitiveProducts, sendAsJSON);

router.route('/category/country')
  .get(productModel.getAllCountryProducts, sendAsJSON);

router.route('/category/general')
  .get(productModel.getAllGeneralProducts, sendAsJSON);

router.route('/category/stoneware')
  .get(productModel.getAllStonewareProducts, sendAsJSON);

router.route('/category/victorian')
  .get(productModel.getAllVictorianProducts, sendAsJSON);

router.route('/category/folk')
  .get(productModel.getAllFolkProducts, sendAsJSON);

router.route('/category/liveedge')
  .get(productModel.getAllLiveedgeProducts, sendAsJSON);

router.route('/category/other')
  .get(productModel.getAllOtherProducts, sendAsJSON);


module.exports = router;
