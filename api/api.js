const router = require('express').Router();
const { 
    getAllEnvelopes,
    createEnvelope
} = require('../envelopes/envelopes');

router.get('/', (req, res, next) => {
    res.send(getAllEnvelopes());
});

router.post('/envelopes', (req, res, next) => {
    createEnvelope(req);
    res.status(201).send();
});

module.exports = { router };