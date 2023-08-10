var express = require('express');
const fs = require('fs');
var path = require('path');
var router = express.Router();
var {generateStyle, generateMarkup} = require('../src/utils/css.js');

router.post('/', function(req, res, next) {
  let markupString = generateMarkup(req.body);
  let cssString = generateStyle(req.body);
  cssString = cssString.replace('		', '');
  fs.writeFile(path.join(__dirname, '../dist/style.css'), cssString, err => {
    if (err) {
      console.log("ERROR WRITING CSS FILE");
    }
    // file written successfully
    console.log("CSS FILE WRITTEN")
  });
  fs.writeFile(path.join(__dirname, '../dist/demo.html'), markupString, err => {
    if (err) {
      console.log("ERROR WRITING HTML FILE");
    }
    // file written successfully
    console.log("HTML FILE WRITTEN")
  });
  res.redirect(`/demo.html?q=${Math.random()}`);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Custom Grid' });
});

module.exports = router;
