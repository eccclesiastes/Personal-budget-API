const { envelopesDatabase } = require('../db.js');

module.exports = {
    getAllEnvelopes() {
        return envelopesDatabase;
    },

    createEnvelope(amountInput, titleInput) {
        const id = envelopesDatabase[envelopesDatabase.length - 1].id + 1;
        const amount = Number(amountInput);

        const item = {
            id: id,
            amount: amount,
            title: titleInput,
        };

        envelopesDatabase.push(item);

        return item;
    },

    findEnvelopeById(idParam) {
        const found = envelopesDatabase.find(env => env.id === Number(idParam));
        return found;
    },

    deleteEnvelopeById(idParam) {
        const toDelete = envelopesDatabase.findIndex(env => env.id === Number(idParam));
        const deleted = envelopesDatabase.splice(toDelete, 1);
        return deleted;
    },

    transferBetweenEnvelopes(fromInput, toInput, amountInput) {
        const fromEnvelope = envelopesDatabase.find(env => env.id === Number(fromInput));
        const toEnvelope = envelopesDatabase.find(env => env.id === Number(toInput));
        const fromAmount = Number(fromEnvelope.amount);
        const toAmount = Number(amountInput);

        if (toAmount > fromAmount) {
            return 0;
        } else {
            fromEnvelope.amount -= toAmount;
            toEnvelope.amount += toAmount;
            return 1;
        };
    },
};