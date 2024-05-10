const { prisma } = require('../prisma/prisma-client');
const brypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const express = require('express');
const router = express.Router();

const {login, register, current} = require('../controllers/users');


/* api/user/destination */

router.post('/login', login);

router.post('/register', register);

router.get('/current', current);

module.exports = router;
