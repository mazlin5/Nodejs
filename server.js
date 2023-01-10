const express = require('express');
const app = express()

// configue json format
app.use(express.json());

app.listen(3000, () => console.log('Listening on port 3000.'));

// get endpoint 
app.get('/hello', (req, res) => {
    console.log('Headers:', req.headers);
    console.log('Method:', req.method);
    res.send('Received GET reqeust!\n');
});

// post endpoint
app.post('/hello', (req, res) => {
    console.log('Headers:', req.headers);
    console.log('Method:', req.method);
    console.log('Body:', req.body);
    res.send('Received POST request!\n');
});

