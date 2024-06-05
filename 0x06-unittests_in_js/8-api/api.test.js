const { expect } = require('chai');
const request = require('request');
const server = require('./api');

describe('Index page', () => {
  let baseUrl = 'http://localhost:7865';

  before(() => {
    server;
  });

  it('Correct status code?', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other?', (done) => {
    // Add more tests if needed
    done();
  });

  after(() => {
    server.close();
  });
});
