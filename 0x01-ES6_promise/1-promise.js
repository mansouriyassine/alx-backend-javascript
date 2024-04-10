#!/usr/bin/node
// 1-promise.js

/**
 * Returns a promise that either resolves with success
 * information or rejects with an error.
 *
 * @param {boolean} success - A boolean indicating whether
 * the promise should resolve or reject.
 * @return {Promise<Object>} The promise object.
 */
function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({
                status: 200,
                body: 'Success'
            });
        } else {
            reject(new Error('The fake API is not working currently'));
        }
    });
}

export default getFullResponseFromAPI;