const db = require('./db.js');
const bcrypt = require('bcrypt');
const SALTROUNDS = 10;

function getUser (req, res, next) {
  db.oneOrNone(`SELECT * FROM "user" WHERE user_id = 1`)
  .then((user) => {
    res.rows = user;
    next();
  })
  .catch(err => next(err));
}

function editUser (req, res, next) {
  db.none(`UPDATE "user" SET email = $1, password = $2 WHERE user_id = 1 RETURNING *`, [req.body.email, req.body.password])
  .then((data) => res.rows = data)
  .then(() => next())
  .catch(err => next(err));
}

module.exports = {
  getUser,
  editUser,
}
