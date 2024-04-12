#!/usr/bin/node
// 5-photo-reject.js

/**
 * Returns a Promise that gets rejected with an Error,
 * indicating the file cannot be processed.
 *
 * @param {string} fileName The name of the file to be uploaded.
 * @return {Promise<Error>} A promise that rejects with an error message.
 */
export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    reject(new Error(`${fileName} cannot be processed`));
  });
}
