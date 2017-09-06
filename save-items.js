// Imports the Google Cloud client library
const Datastore = require('@google-cloud/datastore');

// Your Google Cloud Platform project ID
const projectId = 'chrome-plateau-178520';

// Instantiates a client
const datastore = Datastore({
  projectId: projectId
});

// The Cloud Datastore key for the new entity
const key = datastore.key(['BibleBook', datastore.int('5629499534213120')]);

var books = [
   { name: 'Matthew', chs: 28 },
   { name: 'Mark', chs: 16 },
   { name: 'Luke', chs: 24 },
   { name: 'John', chs: 21 },
   { name: 'Acts', chs: 28 },
   { name: 'Romans', chs: 16 },
   { name: '1 Corinthians', chs: 16 },
   { name: '2 Corinthians', chs: 13 },
   { name: 'Galatians', chs: 6 },
   { name: 'Ephesians', chs: 6 },
   { name: 'Philippians', chs: 4 },
   { name: 'Colossians', chs: 4 },
   { name: '1 Thessalonians', chs: 5 },
   { name: '2 Thessalonians', chs: 3 },
   { name: '1 Timothy', chs: 6 },
   { name: '2 Timothy', chs: 4 },
   { name: 'Titus', chs: 3 },
   { name: 'Hebrews', chs: 13 },
   { name: 'Philemon', chs: 1 },
   { name: 'James', chs: 5 },
   { name: '1 Peter', chs: 5 },
   { name: '2 Peter', chs: 3 },
   { name: '1 John', chs: 5 },
   { name: '2 John', chs: 1 },
   { name: '3 John', chs: 1 },
   { name: 'Jude', chs: 1 },
   { name: 'Revelation', chs: 22 },
];

var BOOK_NUM = 40;
var KIND = 'BibleBook';
books.forEach(function(book) {
   var saveData = {
      key: datastore.key(KIND),
      data: {
         WrittenLanguage: 'Greek',
         BookOrderNumber: BOOK_NUM,
         ChapterCount: book.chs,
         BookName: book.name
      }
   }
   datastore.save(saveData, function(err) {
      console.log("Saved", book.name);
   });
   BOOK_NUM++;
});