const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./api');

const { expect } = chai;
chai.use(chaiHttp);

describe('Server', () => {
  after(() => {
    server.close();
  });

  describe('Index page', () => {
    it('Correct status code?', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('Correct result?', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          expect(res.text).to.equal('Welcome to the payment system');
          done();
        });
    });

    it('Other?', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          // Add additional tests here if needed
          done();
        });
    });
  });

  describe('Cart page', () => {
    it('Correct status code when :id is a number?', (done) => {
      chai.request(server)
        .get('/cart/12')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('Correct result when :id is a number?', (done) => {
      chai.request(server)
        .get('/cart/12')
        .end((err, res) => {
          expect(res.text).to.equal('Payment methods for cart 12');
          done();
        });
    });

    it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
      chai.request(server)
        .get('/cart/hello')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });

    it('Correct result when :id is NOT a number (=> 404)?', (done) => {
      chai.request(server)
        .get('/cart/hello')
        .end((err, res) => {
          expect(res.text).to.equal('Cart ID must be a number');
          done();
        });
    });
  });
});
