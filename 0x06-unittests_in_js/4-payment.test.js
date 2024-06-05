const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;
    let calculateNumberStub;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
        calculateNumberStub.withArgs('SUM', 100, 20).returns(10);
    });

    afterEach(() => {
        consoleSpy.restore();
        calculateNumberStub.restore();
    });

    it('should call Utils.calculateNumber with SUM type and correct arguments', () => {
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberStub.calledOnce).to.be.true;
        expect(calculateNumberStub.calledWithExactly('SUM', 100, 20)).to.be.true;
    });

    it('should log the correct message to the console', () => {
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWithExactly('The total is: 10')).to.be.true;
    });
});
