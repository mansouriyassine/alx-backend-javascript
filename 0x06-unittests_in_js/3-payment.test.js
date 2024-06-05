const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('should call Utils.calculateNumber with SUM type and correct arguments', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        const consoleSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberSpy.calledOnce).to.be.true;
        expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;

        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
    });
});
