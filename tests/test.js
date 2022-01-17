const assert = require('assert');
const request = require('supertest');
const expect = require('chai').expect;
const api = require('../index.js');
const { envelopesDatabase } = require('../db.js');

describe('api_requests', async () => {
    describe('GET', async () => {
        it('returns an array of objects', async () => {
            const expected = 'object';

            const response = await request(api)
            .get('/')
            .send()
            .expect(200);

            assert.strictEqual(typeof response.body, expected);
        });

        it('returns all objects', async () => {
            const expected = envelopesDatabase.length;

            const response = await request(api)
            .get('/')
            .send()
            .expect(200);

            assert.strictEqual(response.body.length, expected);
        });

        it('returns a full envelope object', async () => {
            const response = await request(api)
            .get('/')
            .send()
            .expect(200);

            expect(response.body).hasOwnProperty('title');
            expect(response.body).hasOwnProperty('amount');
            expect(response.body).hasOwnProperty('id');         
        });

        it('returns the object with the correct id (/id)', async () => {
            const expected = 1;

            const response = await request(api)
            .get('/1')
            .send()
            .expect(200)

            assert.strictEqual(response.body.id, expected);
        });
    });
});