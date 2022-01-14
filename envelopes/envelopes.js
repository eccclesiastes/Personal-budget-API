const { envelopesDatabase } = require('../db.js');

module.exports = {
    getAllEnvelopes() {
        return envelopesDatabase;
    },

    // createEnvelope(req) {
    //     const id = envelopesDatabase[envelopesDatabase.length - 1].id + 1;
    //     const amount = req.body?.amount;
    //     const name = req.body?.name;

    //     const item = {
    //         id: id,
    //         amount: amount,
    //         name: name,
    //     };

    //     envelopesDatabase.push(item);

    //     return item;
    // },

    findEnvelopeById(idParam) {
        const found = envelopesDatabase.find(env => env.id === Number(idParam));
        return found;
    },
};