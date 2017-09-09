const db = require('./db.js');
const path = require('path');

function getAllShows(req, res, next) {
  db.any(`SELECT * FROM show`)
  .then((shows) => {
    res.rows = shows;
    next();
  })
  .catch(err => next(err));
}

function getOneShow(req, res, next) {
  db.oneOrNone(`SELECT * FROM show WHERE show_id = $1`, [req.params.show_id])
  .then((show) => {
    res.rows = show;
    next();
  })
  .catch(err => next(err));
}

function createShow (req, res, next) {
  db.none(`INSERT INTO show (name, show_date, venue, location, website, current) VALUES ($1, $2, $3, $4, $5, $6)`, [req.body.name, req.body.show_date, req.body.venue, req.body.location, req.body.website, req.body.current])
  .then(() => next())
  .catch(err => next(err));
}

function editShow(req, res, next) {
  db.none(`UPDATE show SET name = $1, show_date = $2, venue = $3, location = $4, website = $5, current = $6 WHERE show_id = $7`, [req.body.name, req.body.show_date, req.body.venue, req.body.location, req.body.website, req.body.current, req.params.show_id])
  .then((data) => res.rows = data)
  .then(() => next())
  .catch(err => next(err));
}

function deleteShow(req, res, next) {
  const show_id = req.params.show_id;
  const query =  `DELETE FROM show WHERE show_id = $1;`;
  const values = [show_id];

  db.none(query, values)
  .then(() => res.rows = "Succesfully Deleted Show")
  .then(() => next())
  .catch(err => next(err));
}

module.exports = {
  getAllShows,
  getOneShow,
  createShow,
  editShow,
  deleteShow,
}
