var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var postsRoute = require('./routes/posts')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// serve this static directory
var appRoot = process.cwd()

app.use(express.static(path.join(appRoot, 'public')));
app.use( express.static( path.join(appRoot, 'public', 'build') ) )

var apiPrefix = '/api'

// solves the refersh issue.
app.use((req, res, next) => {
    // execute the next middleware on matched condition.
    if ( req.path.startsWith( apiPrefix ) ) return next() 
    res.sendFile(path.join(appRoot, "public", "build", "index.html")); // be default serve this static html file.
});


app.use(apiPrefix, postsRoute)
// specify further routes here...

module.exports = app;
