const { envelopesDatabase } = require('../db.js');

module.exports = {
    getAllEnvelopes() {
        return envelopesDatabase;
    },

    createEnvelope(amountInput, nameInput) {
        const id = envelopesDatabase[envelopesDatabase.length - 1].id + 1;

        const item = {
            id: id,
            amount: amountInput,
            name: nameInput,
        };

        envelopesDatabase.push(item);

        return item;
    },

    findEnvelopeById(idParam) {
        const found = envelopesDatabase.find(env => env.id === Number(idParam));
        return found;
    },
};