const router = require('express').Router();
const { envelopesDatabase } = require('../db');
const { 
    getAllEnvelopes,
    createEnvelope,
    findEnvelopeById,
    deleteEnvelopeById,
} = require('../envelopes/envelopes');

router.get('/', (req, res, next) => {
    res.send(getAllEnvelopes());
});

router.post('/', (req, res, next) => {
    const created = createEnvelope(req.body.amount, req.body.title);
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

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    if (envelopesDatabase.indexOf(envelopesDatabase.find(env => env.id == Number(id))) === -1) {
        res.send(`No such envelope with ID: ${id} found.`);
    } else {
        deleteEnvelopeById(id);
        res.send(`Envelope with ID: ${id} deleted.`);
    };
});

module.exports = { router };