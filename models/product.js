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

function getOneImage (req, res, next) {
  db.oneOrNone(`SELECT * FROM image WHERE image_id = $1`, [req.params.image_id])
  .then((image) => {
    res.rows = image;
    next();
  })
  .catch(err => next(err));
}

function getAllPrimitiveProducts (req, res, next) {
  const firstQuery = `SELECT * FROM product WHERE category = 'primitive';`;
  const secondQuery = `SELECT * FROM image INNER JOIN image_product_ref ON image.image_id = image_product_ref.image_id WHERE image_product_ref.product_id = $1;`;

  db.task((t) => {
    return t.map(firstQuery, [], product => {
      return t.any(secondQuery, product.product_id)
      .then(images => {
        product.images = images;
        return product;
      });
    }).then(t.batch);
  })
  .then((products) => {
    res.rows = products;
    next();
  })
  .catch(err => next(err));
}

function getAllCountryProducts (req, res, next) {
  const firstQuery = `SELECT * FROM product WHERE category = 'country';`;
  const secondQuery = `SELECT * FROM image INNER JOIN image_product_ref ON image.image_id = image_product_ref.image_id WHERE image_product_ref.product_id = $1;`;

  db.task((t) => {
    return t.map(firstQuery, [], product => {
      return t.any(secondQuery, product.product_id)
      .then(images => {
        product.images = images;
        return product;
      });
    }).then(t.batch);
  })
  .then((products) => {
    res.rows = products;
    next();
  })
  .catch(err => next(err));
}

function getAllGeneralProducts (req, res, next) {
  const firstQuery = `SELECT * FROM product WHERE category = 'general';`;
  const secondQuery = `SELECT * FROM image INNER JOIN image_product_ref ON image.image_id = image_product_ref.image_id WHERE image_product_ref.product_id = $1;`;

  db.task((t) => {
    return t.map(firstQuery, [], product => {
      return t.any(secondQuery, product.product_id)
      .then(images => {
        product.images = images;
        return product;
      });
    }).then(t.batch);
  })
  .then((products) => {
    res.rows = products;
    next();
  })
  .catch(err => next(err));
}

function getAllStonewareProducts (req, res, next) {
  const firstQuery = `SELECT * FROM product WHERE category = 'stoneware';`;
  const secondQuery = `SELECT * FROM image INNER JOIN image_product_ref ON image.image_id = image_product_ref.image_id WHERE image_product_ref.product_id = $1;`;

  db.task((t) => {
    return t.map(firstQuery, [], product => {
      return t.any(secondQuery, product.product_id)
      .then(images => {
        product.images = images;
        return product;
      });
    }).then(t.batch);
  })
  .then((products) => {
    res.rows = products;
    next();
  })
  .catch(err => next(err));
}

function getAllVictorianProducts (req, res, next) {
  const firstQuery = `SELECT * FROM product WHERE category = 'victorian';`;
  const secondQuery = `SELECT * FROM image INNER JOIN image_product_ref ON image.image_id = image_product_ref.image_id WHERE image_product_ref.product_id = $1;`;

  db.task((t) => {
    return t.map(firstQuery, [], product => {
      return t.any(secondQuery, product.product_id)
      .then(images => {
        product.images = images;
        return product;
      });
    }).then(t.batch);
  })
  .then((products) => {
    res.rows = products;
    next();
  })
  .catch(err => next(err));
}

function getAllFolkProducts (req, res, next) {
  const firstQuery = `SELECT * FROM product WHERE category = 'folk';`;
  const secondQuery = `SELECT * FROM image INNER JOIN image_product_ref ON image.image_id = image_product_ref.image_id WHERE image_product_ref.product_id = $1;`;

  db.task((t) => {
    return t.map(firstQuery, [], product => {
      return t.any(secondQuery, product.product_id)
      .then(images => {
        product.images = images;
        return product;
      });
    }).then(t.batch);
  })
  .then((products) => {
    res.rows = products;
    next();
  })
  .catch(err => next(err));
}

function getAllLiveedgeProducts (req, res, next) {
  const firstQuery = `SELECT * FROM product WHERE category = 'liveedge';`;
  const secondQuery = `SELECT * FROM image INNER JOIN image_product_ref ON image.image_id = image_product_ref.image_id WHERE image_product_ref.product_id = $1;`;

  db.task((t) => {
    return t.map(firstQuery, [], product => {
      return t.any(secondQuery, product.product_id)
      .then(images => {
        product.images = images;
        return product;
      });
    }).then(t.batch);
  })
  .then((products) => {
    res.rows = products;
    next();
  })
  .catch(err => next(err));
}

function getAllOtherProducts (req, res, next) {
  const firstQuery = `SELECT * FROM product WHERE category = 'other';`;
  const secondQuery = `SELECT * FROM image INNER JOIN image_product_ref ON image.image_id = image_product_ref.image_id WHERE image_product_ref.product_id = $1;`;

  db.task((t) => {
    return t.map(firstQuery, [], product => {
      return t.any(secondQuery, product.product_id)
      .then(images => {
        product.images = images;
        return product;
      });
    }).then(t.batch);
  })
  .then((products) => {
    res.rows = products;
    next();
  })
  .catch(err => next(err));
}

function createProduct (req, res, next) {
  db.none(`INSERT INTO product (name, description, price, sku, category, sold) VALUES ($1, $2, $3, $4, $5, false)`, [req.body.name, req.body.description, req.body.price, req.body.sku, req.body.category])
  .then(next())
  .catch(err => next(err));
}

function createImage (req, res, next) {
  db.none(`INSERT INTO image (url) VALUES ($1)`, [req.body.image])
  .then(next())
  .catch(err => next(err));
}

function editProduct (req, res, next) {
  db.none(`UPDATE product SET name = $1, description = $2, price = $3, sku = $4, category = $5, sold = $6 WHERE product_id = $7`, [req.body.name, req.body.description, req.body.price, req.body.sku, req.body.category, req.body.sold, req.params.product_id])
  .then((data) => res.rows = data)
  .then(() => next())
  .catch(err => next(err));
}

function editImage (req, res, next) {
  db.none(`UPDATE image SET url = $1`, [req.body.url])
  .then((data) => res.rows = data)
  .then(() => next())
  .catch(err => next(err));
}

function deleteProduct (req, res, next) {
  const product_id = req.params.product_id;
  const query = `DELETE FROM product WHERE product_id = $1; DELETE FROM image_product_ref WHERE product_id = $1; DELETE FROM image USING image_product_ref WHERE image.image_id = image_product_ref.image_id AND image_product_ref.product_id = $1;`;
  const values = [product_id];

  db.none(query, values)
  .then(() => res.rows = 'Succesfully Deleted Product')
  .then(() => next())
  .catch(err => next(err));
}

function deleteImage (req, res, next) {
  const image_id = req.params.image_id;
  const query = `DELETE FROM image WHERE image_id = $1;`;
  const values = [image_id];

  db.none(query, values)
  .then(() => res.rows = "Sucessfully Deleted Image")
  .then(() => next())
  .catch(err => next(err));
}

module.exports = {
  getOneProduct,
  getOneImage,
  getAllPrimitiveProducts,
  getAllCountryProducts,
  getAllGeneralProducts,
  getAllStonewareProducts,
  getAllVictorianProducts,
  getAllFolkProducts,
  getAllLiveedgeProducts,
  getAllOtherProducts,
  createProduct,
  createImage,
  editProduct,
  editImage,
  deleteProduct,
  deleteImage,
}
