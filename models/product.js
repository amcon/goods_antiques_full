const db = require('./db.js');
const path = require('path');

function getOneProduct (req, res, next) {
  db.oneOrNone(`SELECT * FROM product WHERE product_id = $1`, [req.params.product_id])
  .then((product) => {
    res.rows = product;
    next();
  })
  .catch(err => next(err));
}

function getAllProducts (req, res, next) {
  db.any(`SELECT * FROM product`)
  .then((products) => {
    res.rows = products;
    next();
  })
  .catch(err => next(err));
}

function createProduct (req, res, next) {
  db.none(`INSERT INTO product (name, description, price, sku, category, sold, main_img, sup_img_1, sup_img_2, sup_img_3) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`, [req.body.name, req.body.description, req.body.price, req.body.sku, req.body.category, req.body.sold, req.body.main_img, req.body.sup_img_1, req.body.sup_img_2, req.body.sup_img_3])
  .then(next())
  .catch(err => next(err));
}

function editProduct (req, res, next) {
  db.none(`UPDATE product SET name = $1, description = $2, price = $3, sku = $4, category = $5, sold = $6, main_img = $7, sup_img_1 = $8, sup_img_2 = $9, sup_img_3 = $10 WHERE product_id = $11`, [req.body.name, req.body.description, req.body.price, req.body.sku, req.body.category, req.body.sold, req.body.main_img, req.body.sup_img_1, req.body.sup_img_2, req.body.sup_img_3, req.params.product_id])
  .then((data) => res.rows = data)
  .then(() => next())
  .catch(err => next(err));
}

function deleteProduct (req, res, next) {
  const product_id = req.params.product_id;
  const query = `DELETE FROM product WHERE product_id = $1;`;
  const values = [product_id];

  db.none(query, values)
  .then(() => res.rows = 'Succesfully Deleted Product')
  .then(() => next())
  .catch(err => next(err));
}

module.exports = {
  getOneProduct,
  getAllProducts,
  createProduct,
  editProduct,
  deleteProduct,
}
