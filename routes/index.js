// var express = require('express');
const routes = require('express').Router();
const userController = require('../controllers/user.js')

/* GET home page. */
routes.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // res.send("hai")
});

routes.post('/register', userController.insertOne)

module.exports = routes;
