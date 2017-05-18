// var express = require('express');
const routes = require('express').Router();
const userController = require('../controllers/user.js')
const articleController = require('../controllers/article.js')

/* GET home page. */
// routes.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
//   // res.send("hai")
// });

routes.get('/', articleController.getAll)

routes.get('/register', function(req, res){
  res.render('register')
})
routes.post('/register', userController.insertOne)

routes.get('/inputarticle', function(req, res){
  res.render('inputarticle')
})
routes.post('/inputarticle', articleController.insertOne)

module.exports = routes;
