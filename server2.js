// express - middleware to create endpoints 

const fs = require('fs');
const express = require('express');
const DATA_DIR = 'aedb_data';

const app = express();
// configue json format
app.use(json());

const hashtable = {};

// second param of REST methods take callback
// res sends responses back to client
// req receives requests from client (what I pass with curl)

app.listen(3001, () => console.log('Listening on port 3000.'));

// send data to server
app.post('/memory/:key', (req,res) => {
    hashtable[req.params.key] = req.body.data;
    res.send();

// retreive data from server
app.get('/memory/:key', (req, res) => {
    const key = req.params.key;
    if (key in hashtable) {
        res.send(hashtable[key]);
        return;
    }
    res.send('null');
});

app.post('disk/:key', (req, res) => {
    const destinationFile = `${DATA_DIR}/${req.params.key}`;
    writeFileSync(destinationFile, req.body.data);
    res.send();
});

app.get('/disk/:key', (req, res) => {
    const destinationFile = `${DATA_DIR}/${req.params.key}`;
    try {
        const data = readFileSync(destinationFile);
        res.send(data);
    } catch (e) {
        res.send('null');
    }
});

});



