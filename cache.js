// import dependencies
const database = require('./database');
const express = require('express');

// create express instance as app object
const app = express();
// set up key-value store for cashing layer
const cache = {};

// if there was no cache, hit server directly
app.get('/nocache/index.html', (req, res) => {
    database.get('index.html', page => {
        res.send()
    });
});

// if there was cache, try cache first else, hit server 
app.get('/withcache/index.html', (req, res) => {
    if ('index.html' in cache) {
        res.send(cache['index.html']);
        return;
    }
    
    database.get('index.html', page => {
        cache['index.html'] = page 
        res.send(page)
    });
});

// setup server to listen on localhost port for incoming requests
app.listen(3001, function() {
    console.log('listening on port 3001!');
});