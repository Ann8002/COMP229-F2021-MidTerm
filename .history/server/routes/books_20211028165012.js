// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const books = require('../models/books');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
          title: 'Books',
          books: books 
       
     });
     
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/:id', (req, res, next) => {
  res.render('books/details', {title: 'Add Book'})

});


// POST process the Book Details page and create a new Book - CREATE
router.post('/details', (req, res, next) => {
    let newBooks = Books({
      "title": req.body.title,
      "author": req.body.author,
      "published": req.body.published,
      "category": req.body.published,
      "category": req.body.category,
      "price": req.body.price
    });
    
    Books.create(neBooks, (err, Books) =>{
        if(err)
        {
          console.log(err);
          res.end(err);
        }
        else
        {
            //refresh the books
            res.redirect('/books');
        }
    });

});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
});


module.exports = router;