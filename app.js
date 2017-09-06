const app = require('express')();

app.use(require('./routes/health'));
app.use(require('./routes/schedules'));
app.use(require('./routes/bible-books'));

app.listen(8080, function() {
   console.log("Listening on localhost:8080");
});