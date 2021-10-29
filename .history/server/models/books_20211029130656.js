// File Name: COMP229-F2021-MidTerm-301150331
// Author's Name: Sindhu Binil
// StudentID: 301150331
// Web App Name: comp229-f2021-mt-301150331

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    title: String,
    author: String,
    published: String,
    category: String,
    price: Number
    
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
