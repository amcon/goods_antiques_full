const db = require('./db.js');
const bcrypt = require('bcrypt');
const auth = require('../lib/auth.js');
const { isValidEmail } = require('../lib/lib.js');

const SALTROUNDS = 10;

function createUser (req, res, next) {
  const email = req.body.email.toLowerCase();
  const password = bcrypt.hashSync(req.body.password, SALTROUNDS);

  if (!(email || password)) next(new Error('Please check that all fields were filled out properly.'));
  if (!isValidEmail(email)) next(new Error('Please submit a valid email address.'));

  const query = `INSERT INTO "user" (email, password) VALUES ($1, $2) RETURNING user_id, email;`;
  const values = [
    email,
    password,
  ];

  db.one(query, values)
  .then((data) => {
    auth.getUserToken(data)
      .then((token) => res.rows = token)
      .then(() => next())
      .catch(err => next(err));
  })
  .catch(err => next(err));
}

function getUser (req, res, next) {
  const token = req.headers['token_authorization'] || req.body.token || req.params.token || req.query.token;
  auth.getUserData(token)
  .then((user) => res.rows = user.data)
  .then(() => next())
  .catch(err => next(err));
}

function getAdmin (req, res, next) {
  db.oneOrNone(`SELECT email FROM "user" WHERE email = 'goodsantiqueswisconsin@gmail.com'`)
  .then((admin) => {
    res.rows = admin;
    next();
  })
  .catch(err => next(err));
}

function logIn (req, res, next) {
  const email = req.body.email.toLowerCase();
  const password = req.body.password;

  if (!email || !password) next(new Error('Logging in requires both an email and a password.'));
  if (!isValidEmail(email)) next(new Error('Please submit a valid email address.'));

  const query = `SELECT * FROM "user" WHERE email = $1;`;
  const values = [email];

  db.oneOrNone(query, values)
  .then((data) => {
    if (!data) next(new Error('Invalid login credentials.'));
    if (bcrypt.compareSync(password, data.password)) {
      const userObj = {};
      for (let key in data) {
        if (key != 'password') userObj[key] = data[key];
      }
      auth.getUserToken(userObj)
      .then((token) => res.rows = token)
      .then(() => next())
      .catch(err => next(err));
    } else {
      next(new Error('Invalid login credentials.'));
    }
  })
  .catch(err => next(err));
}

function updateUser (req, res, next) {
  if (!isValidEmail(req.body.email)) next(new Error('Please submit a valid email address.'));

  let query = `UPDATE "user" SET `;
  let params = [req.body.email, req.body.password];
  let columns = ['email', 'password'];
  let values = [];

  params.forEach((val, i) => {
    if (val) {
      if (columns[i] == 'password') {
        values.push(bcrypt.hashSync(params[i], SALTROUNDS))
        query += `${columns[i]} = $${values.length}, `
      } else {
        values.push(params[i])
        query += `${columns[i]} = $${values.length}, `
      }
    }
  });
  query = query.slice(0, -2);
  query += ` WHERE user_id = $${values.length + 1} RETURNING user_id, email;`;
  values.push(res.userInfo.user_id)

  db.one(query, values)
  .then((data) => {
    auth.getUserToken(data)
      .then((token) => res.rows = token)
      .then(() => next())
      .catch(err => next(err));
  })
  .catch(err => next(err));
}

module.exports = {
  createUser,
  getUser,
  getAdmin,
  logIn,
  updateUser,
}
