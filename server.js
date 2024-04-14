const express = require('express');
// used to piece together different file locations/figure out where things are
const path = require('path');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index.js');

const app = express();

// enable parsing of POST request body
app.use(bodyParser.urlencoded({ extended: false }));

const staticFileLocation = path.join(__dirname, 'public');
app.use(express.static(staticFileLocation));

// __dirname in node.js is always the directory that the currently running script is in.
// this is telling the app where the views (HTML files or templates) are located
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs'); // using handlebars to generate views

app.use('/', indexRouter);  // add requests to the app will be passed to indexRouter

// start server running
const server = app.listen(process.env.port || 3000, function() {
    console.log('server running on port ', server.address().port);
})
