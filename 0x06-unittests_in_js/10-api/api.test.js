const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Server', function() {
  let server;

  before(function(done) {
    server = app.listen(7865, function() {
      console.log('API available on localhost port 7865');
      done();
    });
  });

  after(function(done) {
    server.close(function(err) {
      if (err) {
        console.error('Error closing server:', err);
        done(err);
      } else {
        console.log('Server closed');
        done();
      }
    });
  });

  describe('Available Payments page', function() {
    it('Correct status code?', function(done) {
      request.get('http://localhost:7865/available_payments', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('Correct result?', function(done) {
      request.get('http://localhost:7865/available_payments', function(error, response, body) {
        const expected = {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        };
        expect(JSON.parse(body)).to.deep.equal(expected);
        done();
      });
    });
  });

  describe('Login page', function() {
    it('Correct status code?', function(done) {
      request.post(
        {
          url: 'http://localhost:7865/login',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userName: 'Betty' })
        },
        function(error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
        }
      );
    });

    it('Correct result?', function(done) {
      request.post(
        {
          url: 'http://localhost:7865/login',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userName: 'Betty' })
        },
        function(error, response, body) {
          expect(body).to.equal('Welcome Betty');
          done();
        }
      );
    });
  });
});
