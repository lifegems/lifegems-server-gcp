var datastore = require('../config/datastore');
var router = require('express').Router();

router.get('/check', function(req, res) {
   console.log('  GET 200', req.originalUrl);
   res.send('green');
});

module.exports = router;