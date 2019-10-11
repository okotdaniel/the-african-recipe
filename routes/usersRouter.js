const express = require('express');
const usersRouter = express.Router();


usersRouter.get('/register', (req, res) => res.render('register'));
usersRouter.get('/login', (req, res) => res.render('login'));

module.exports = usersRouter;