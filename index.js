const express = require('express');
const app = express();
const { router } = require('./api/api.js');

app.use('/', router);

app.get('/', (req, res, next) => {
    res.send('Hello world!');
});

app.listen(3000, () => {
    console.log('Listening at port: http://localhost:3000');
});