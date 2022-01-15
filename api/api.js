const router = require('express').Router();
const { envelopesDatabase } = require('../db');
const { 
    getAllEnvelopes,
    createEnvelope,
    findEnvelopeById,
    deleteEnvelopeById,
    transferBetweenEnvelopes,
} = require('../envelopes/envelopes');

router.get('/', (req, res, next) => {
    res.send(getAllEnvelopes());
});

router.post('/', (req, res, next) => {
    if (!req.body.title || !req.body.amount) {
        res.status(400).send();
    } else if (typeof req.body.title !== 'string' || typeof req.body.amount !== 'number') {
        res.status(400).send();
    } else {
        const created = createEnvelope(req.body.amount, req.body.title);
        res.status(201).send(created);
    };
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
        res.status(404).send(`No such envelope with ID: ${id} found.`);
    } else {
        deleteEnvelopeById(id);
        res.send(`Envelope with ID: ${id} deleted.`);
    };
});

router.post('/transfer/:fromId/:toId/', (req, res, next) => {
    const fromEnvelope = req.params.fromId;
    const toEnvelope = req.params.toId;
    const amountToTransfer = req.body.amount;

    const transferred = transferBetweenEnvelopes(fromEnvelope, toEnvelope, amountToTransfer);

    if (transferred === 1) {
        res.send(`Transferred ${amountToTransfer} from envelope with ID: ${fromEnvelope} to envelope with ID: ${toEnvelope}.`);
    } else {
        res.status(400).send();
    };
});

module.exports = { router };