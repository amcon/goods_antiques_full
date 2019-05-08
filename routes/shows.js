const router = require('express').Router();
const showModel = require('../models/show.js');

function sendAsJSON (req, res, next) {
  res.json(res.rows);
}

router.route('/:show_id')
  .get(showModel.getOneShow, sendAsJSON)
  .put(showModel.getOneShow, showModel.editShow, sendAsJSON)
  .delete(showModel.deleteShow, sendAsJSON);

router.route('/')
  .get(showModel.getAllShows, sendAsJSON)
  .post(showModel.createShow, sendAsJSON);

module.exports = router;
