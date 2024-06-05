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
    server.close(function() {
      console.log('Server closed');
      done();
    });
  });

  describe('Index page', function() {
    it('Correct status code?', function(done) {
      request.get('http://localhost:7865/', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('Correct result?', function(done) {
      request.get('http://localhost:7865/', function(error, response, body) {
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });

    it('Other?', function(done) {
      done();
    });
  });

  describe('Cart page', function() {
    it('Correct status code when :id is a number?', function(done) {
      request.get('http://localhost:7865/cart/12', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('Correct result when :id is a number?', function(done) {
      request.get('http://localhost:7865/cart/12', function(error, response, body) {
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('Correct status code when :id is NOT a number (=> 404)?', function(done) {
      request.get('http://localhost:7865/cart/hello', function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });

    it('Correct result when :id is NOT a number (=> 404)?', function(done) {
      request.get('http://localhost:7865/cart/hello', function(error, response, body) {
        expect(body).to.equal('Cannot GET /cart/hello');
        done();
      });
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
