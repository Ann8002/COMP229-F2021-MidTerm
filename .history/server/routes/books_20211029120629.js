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
    else 
    {
      res.render('books/index', {
          title: 'Books',
          books: books 
       
     });
     
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/:id', (req, res, next) => {
  res.render('books/add', {title: 'Add Book'})

});


// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {
    let newBooks = books({
      "title": req.body.title,
      "author": req.body.author,
      "published": req.body.published,
      "category": req.body.category,
      "price": req.body.price
    });
    
    books.create(newBooks, (err, books) => {
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
router.get('/edit/:id', (req, res, next) => {
  let id = req.params.id;

  books.findById(id, (err, booksToEdit) => {
    if(err)
    {
      console.log(err);
      res.end(err);
    }
    else
    {
      //show the edit view
      res.render('books/edit', {title: 'Edit Books', books: booksToEdit})
    }
  });
});

// POST - process the information passed from the details form and update the document
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id

    let updatedBooks = books({
     "_id": id,
     "title": req.body.title,
     "author": req.body.author,
     "published": req.body.published,
     "category": req.body.category,
     "price": req.body.price
    });

    books.updateOne({_id: id}, updatedBooks, (err) => {
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

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    books.remove({_id: id}, (err) => {
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


module.exports = router;
