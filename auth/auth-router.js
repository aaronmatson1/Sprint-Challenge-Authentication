const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require("../auth/auth-model");

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;


  const hash = bcrypt.hashSunc(user.password, 6);

  user.password = hash;

  Users.add(user)
    .then((saved) => {
      if (req.body) {
        res.status(201).json(saved);
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
