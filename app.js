const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const database = require('./models/database.js')


mongoose.connect(database.url);

const app = express()

app.set('view engine', 'ejs')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', require('./routes/index.js'))


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

module.exports = app
