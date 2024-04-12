#!/usr/bin/node
// 0-promise.js

/**
 * Returns a Promise that resolves with no value.
 *
 * @return {Promise<void>} The promise object.
 */
function getResponseFromAPI() {
  return new Promise((resolve) => {
    resolve();
  });
}

export default getResponseFromAPI;
