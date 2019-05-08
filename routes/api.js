const router = require('express').Router();
const usersRouter = require('./users.js');
const productsRouter = require('./products.js');
const showsRouter = require('./shows.js');

router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/shows', showsRouter);

module.exports = router;
