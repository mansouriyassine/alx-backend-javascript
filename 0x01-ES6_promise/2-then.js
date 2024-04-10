#!/usr/bin/node
// 2-then.js

/**
 * Handles a promise from an API call.
 *
 * @param {Promise} promise - The promise to handle.
 * @return {Promise}
 */
function handleResponseFromAPI(promise) {
    return promise
        .then(() => {
            console.log('Got a response from the API');
            return { status: 200, body: 'success' };
        })
        .catch(() => {
            console.log('Got a response from the API');
            return new Error();
        });
}

export default handleResponseFromAPI;