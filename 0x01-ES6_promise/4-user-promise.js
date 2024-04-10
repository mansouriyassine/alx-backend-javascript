#!/usr/bin/node
// 4-user-promise.js

/**
 * Returns a resolved promise with an object containing the given firstName and lastName.
 *
 * @param {string} firstName The first name.
 * @param {string} lastName The last name.
 * @return {Promise<Object>} A promise that resolves with the user's name details.
 */
function signUpUser(firstName, lastName) {
    return Promise.resolve({ firstName, lastName });
}

export default signUpUser;