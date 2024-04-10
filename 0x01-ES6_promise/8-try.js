#!/usr/bin/node
// 8-try.js

/**
 * Divides the numerator by the denominator.
 * Throws an error if the denominator is zero.
 *
 * @param {Number} numerator - The numerator in the division.
 * @param {Number} denominator - The denominator in the division.
 * @return {Number} The result of the division.
 * @throws {Error} When the denominator is 0.
 */
export default function divideFunction(numerator, denominator) {
    if (denominator === 0) {
        throw new Error('cannot divide by 0');
    }
    return numerator / denominator;
}