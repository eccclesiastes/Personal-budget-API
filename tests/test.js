const assert = require('assert');
const request = require('supertest');
const expect = require('chai').expect;
const api = require('../index.js');

describe('api_requests', async () => {
    describe('GET', async () => {
        it('returns an array of objects on GET /', async () => {
            const expected = 'object';

            const response = await request(api)
            .get('/')
            .send()
            .expect(200);

            assert.strictEqual(typeof response.body, expected);
        });
    });
});