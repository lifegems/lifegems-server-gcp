var datastore = require('../config/datastore');
var router = require('express').Router();

router.get('/bible-books/:num', function(req, res) {
   console.log('  GET 200', req.originalUrl);
   const num = req.params.num;
   const query = datastore.createQuery('BibleBook').filter('BookOrderNumber', parseInt(num)).limit(1);
   datastore.runQuery(query, function(err, row) {
      if (row && row.length > 0) {
         const book = {
            name: row[0].BookName,
            chapters: row[0].ChapterCount,
            bookNum: row[0].BookOrderNumber,
            writtenLang: row[0].WrittenLanguage
         }
         res.send(book);
      }
   });
});

function getOrderByKey(key) {
   switch (key) {
      case 'name':
         return 'BookName';
      case 'chapters':
         return 'ChapterCount'
      case 'bookNum':
      default: 
         return 'BookOrderNumber';
   }
}

router.get('/bible-books', function(req, res) {
   console.log('  GET 200', req.originalUrl);
   var orderByKey = getOrderByKey(req.query.orderBy);
   const query = datastore.createQuery('BibleBook').limit(66).order(orderByKey);
   datastore.runQuery(query, function(err, rows) {
      var books = rows.map(function(row) {
         return {
            name: row.BookName,
            chapters: row.ChapterCount,
            bookNum: row.BookOrderNumber,
            writtenLang: row.WrittenLanguage
         }
      }).filter(function(book) {
         var search = req.query.search;
         if (search) {
            return book.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
         }
         return book;
      });
      res.send(books);
   });
});

module.exports = router;