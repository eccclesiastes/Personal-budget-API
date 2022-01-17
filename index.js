const express = require('express');
const app = express();
const { router } = require('./api/api.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', router);

app.get('/', (req, res, next) => {
    res.send('Hello world!');
});

module.exports = app.listen(3000, () => {
    console.log('Listening at port: http://localhost:3000');
});