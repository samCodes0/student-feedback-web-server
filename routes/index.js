const express = require('express');
const router = express.Router();  // routers are responsible for determining what code to execute in response to
// a request to the server. It does this typically based on the url and the method, GET, POST, ETC...

// req = the request
// res = the response
// next = in the event that there was some kind of error, this is the function that can handle the error
// the function responds to get requests to the home page
router.get('/', (req, res, next) => {
    // rendering is the process of taking an html template and combining it with the data to output full html that the
    // browser can understand
    // name of handlebars file/name of template, and an optional object with data for the template.
    res.render('index', {
        title: 'Feedback Application',
        author: 'Sam',
        timePageLoadedAt: new Date()
    });
});

router.get('/feedback-form', (req, res, next) => {
    res.render('student-feedback-form', {});
});

router.post('/submit-feedback', (req, res, next) => {
    // in GET requests - read the URL query using req.query
    // in POST requests - use req.body
    const formData = req.body;

    // todo: save to a database
    // automatically email someone when feedback was submitted

    res.render('thank-you', {
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent: formData['current-student']
    });
});

// this is what the files that import this file will receive when they use 'require()'
module.exports = router;  // make sure this is the last line in the file