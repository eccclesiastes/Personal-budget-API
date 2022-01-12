const { envelopesDatabase } = require('../db.js');
console.log(envelopesDatabase);

module.exports = {
    getAllEnvelopes() {
        return envelopesDatabase;
    },

    createEnvelope(data) {
        const id = envelopesDatabase[envelopesDatabase.length - 1].id + 1;
        const amount = data.body.amount;
        const name = data.body.name;

        const item = `{\n id: ${id},\n amount: ${amount},\n name: ${name},\n},`

        envelopesDatabase.push(item);
    },
};