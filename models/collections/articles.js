const mongoose = require('mongoose');
var articleSchema = mongoose.Schema({
    title: String,
    content: String,
    category: String,
    author: String
});

module.exports = mongoose.model('Article', articleSchema);
