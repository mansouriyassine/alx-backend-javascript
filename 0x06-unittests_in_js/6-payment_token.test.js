const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should resolve with success message when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                assert.deepStrictEqual(response, { data: 'Successful response from the API' });
                done();
            })
            .catch((err) => {
                done(err);
            });
    });

    it('should reject with an error when success is false', (done) => {
        getPaymentTokenFromAPI(false)
            .then(() => {
                done(new Error('Expected promise to be rejected'));
            })
            .catch((err) => {
                assert.strictEqual(err.message, 'API call failed');
                done();
            });
    });
});
