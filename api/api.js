const router = require('express').Router();
const { envelopesDatabase } = require('../db');
const { 
    getAllEnvelopes,
    createEnvelope,
    findEnvelopeById,
    deleteEnvelopeById,
    transferBetweenEnvelopes,
    updateEnvelope,
} = require('../envelopes/envelopes');

router.get('/', (req, res, next) => {
    res.send(getAllEnvelopes());
});

router.post('/', (req, res, next) => {
    const title = req.body.title;
    const amount = req.body.amount;

    if (!title || !amount) {
        res.status(400).send();
    } else if (typeof title !== 'string' || typeof amount !== 'number') {
        res.status(400).send();
    } else if (amount < 0) {
        res.status(400).send();
    } else {
        const created = createEnvelope(amount, title);
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

    if (amountToTransfer < 0) {
        res.status(400).send();
    } else if (transferred === 1) {
        res.send(`Transferred ${amountToTransfer} from envelope with ID: ${fromEnvelope} to envelope with ID: ${toEnvelope}.`);
    } else {
        res.status(400).send();
    };
});

router.post('/update/:id', (req, res, next) => {
    const id = req.params.id;
    const title = req.body.title;
    const amount = req.body.amount;

    if (!title || !amount) {
        res.status(400).send();
    } else if (typeof title !== 'string' || typeof amount !== 'number') {
        res.status(400).send();
    } else if (envelopesDatabase.indexOf(envelopesDatabase.find(env => env.id == Number(id))) === -1) {
        res.status(404).send(`No such envelope with ID: ${id} found.`);
    } else if (amount < 0) {
        res.status(400).send();
    } else {
        const updated = updateEnvelope(id, title, amount);
        res.send(updated);
    };
});

module.exports = { router };