// File Name: COMP229-F2021-MidTerm-301150331
// Author's Name: Sindhu Binil
// StudentID: 301150331
// Web App Name: comp229-f2021-mt-301150331

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
