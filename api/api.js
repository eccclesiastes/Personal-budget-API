const router = require('express').Router();
const { 
    getAllEnvelopes,
    createEnvelope,
    findEnvelopeById,
} = require('../envelopes/envelopes');

router.get('/', (req, res, next) => {
    res.send(getAllEnvelopes());
});

router.post('/envelopes', (req, res, next) => {
    const created = createEnvelope(Number(req.body.amount), req.body.name);
    res.status(201).send(created);
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const found = findEnvelopeById(id);

    if (found === undefined) {
        res.status(404).send(`No such envelope with ID: ${id} found.`);
    } else {
        res.send(found);
    };
});

module.exports = { router };