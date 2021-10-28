let mongoose = require('mongoose');

// create a model class
let book = mongoose.Schema({
    title: String,
    author: String,
    published: String,
    category: String,
    price: Number
    
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', book);
