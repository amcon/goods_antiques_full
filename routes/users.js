const router = require('express').Router();
const userModel = require('../models/user.js');
const auth = require('../lib/auth.js');

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

router.route('/admin')
  .get(userModel.getAdmin, sendAsJSON)

router.route('/login')
  .post(userModel.logIn, sendAsJSON);

router.route('/')
  .get(auth.authenticateUser, userModel.getUser, sendAsJSON)
  .post(userModel.createUser, sendAsJSON)
  .put(auth.authenticateUser, userModel.getUser, userModel.updateUser, sendAsJSON);

module.exports = router;
