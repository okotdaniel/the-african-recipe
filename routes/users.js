const express = require('express');
const users = express.Router();
//  mongodb+srv://atlas:<password>@testcluster-ehux5.mongodb.net/test?retryWrites=true&w=majority 

users.get('/register', (req, res) => res.render('register'));
users.get('/login', (req, res) => res.render('login'));

module.exports = users;