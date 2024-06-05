const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM operation', () => {
        it('should return the correct sum of rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });
    });

    describe('SUBTRACT operation', () => {
        it('should return the correct subtraction of rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
    });

    describe('DIVIDE operation', () => {
        it('should return the correct division of rounded numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return "Error" if the rounded value of b is 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });

    describe('Error cases', () => {
        it('should throw an error for an invalid operation type', () => {
            assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), Error);
        });
    });
});