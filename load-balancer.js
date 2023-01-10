const express = require('express');
const app = express();

let port = process.env.PORT;

app.listen(port, () => console.log(`Listening on port ${port}.`));

app.get('/hello', (req, res) => {
    console.log(req.headers);
    res.send(`You got this keep going on port ${port}.\n`);
});

