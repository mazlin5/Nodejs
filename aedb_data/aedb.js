const express = require('express');
const fs = require('fs');

const port = process.env.port;
const DATA_DIR = process.env.DATA_DIR;

const app = express();
app.use(express.json())

// type of body of req is indicated by Content-Type header
app.post('/:key', (req, res) => {
    const {key} = req.params;
    console.log(`Storing data at key ${key},`);
    const destinationFile = `${DATA_DIR}/${key}`;
    fs.writeFileSync(destinationFile, req.body.data);
    res.send();
});

app.get('/:key', (req, res) => {
    const {key} = req.params;
    console.log(`Recieving data from key ${key},`);
    const destinationFile = `${DATA_DIR}/${key}`;
    try {
        const data = fs.readFileSync(destinationFile);
        res.send();
    } catch (e){
        res.send('null');
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});