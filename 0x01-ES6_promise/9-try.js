#!/usr/bin/node
// 9-try.js

/**
 * Executes a math function and manages the outcome, capturing any errors.
 *
 * @param {Function} mathFunction - The math function to execute.
 * @return {Array} An array with the result of the math function
 * or an error message, and a processed message.
 */
export default function guardrail(mathFunction) {
    const queue = [];

    try {
        const result = mathFunction();
        queue.push(result);
    } catch (error) {
        queue.push(error.message);
    }

    queue.push('Guardrail was processed');

    return queue;
}