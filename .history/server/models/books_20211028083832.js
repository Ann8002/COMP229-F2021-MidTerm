let mongoose = require('mongoose');

// create a model class
let books = mongoose.Schema({
    title: String,
    author: String,
    published: String,
    category: String,
    price: Number
    
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', books);
