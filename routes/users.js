const router = require('express').Router();
const userModel = require('../models/user.js');

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

router.route('/')
  .get(userModel.getUser, sendAsJSON)
  .put(userModel.getUser, userModel.editUser, sendAsJSON);

module.exports = router;
