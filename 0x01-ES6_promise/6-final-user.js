#!/usr/bin/node
// 6-final-user.js
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

/**
 * Calls signUpUser and uploadPhoto, waits for both to settle, and returns
 * an array with the outcomes of each promise.
 *
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} fileName
 * @return {Promise<Array<Object>>}
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
    return Promise.allSettled([
        signUpUser(firstName, lastName),
        uploadPhoto(fileName)
    ]).then(results => results.map(result => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason
    })));
}