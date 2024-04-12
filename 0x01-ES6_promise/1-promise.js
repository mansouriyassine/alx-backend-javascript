#!/usr/bin/node
// 1-promise.js

/**
 * Returns a promise that either resolves with success information or
 * rejects with an error message based on the input boolean.
 *
 * @param {boolean} success - Determines whether the promise resolves or rejects.
 * @return {Promise<{status: number, body: string}> | Promise<Error>} - A promise
 * that resolves with an object or rejects with an error.
 */
function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

export default getFullResponseFromAPI;
