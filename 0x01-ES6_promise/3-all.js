#!/usr/bin/node
import { uploadPhoto, createUser } from './utils.js';

/**
 * Handles the profile signup process by waiting for both uploadPhoto and createUser
 * to resolve and then logging the results.
 */
function handleProfileSignup() {
    Promise.all([uploadPhoto(), createUser()])
        .then(values => {
            console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
        })
        .catch(errors => {
            errors.forEach(error => {
                if (error instanceof Error) {
                    console.error(error.message);
                } else {
                    console.error('Unknown error occurred');
                }
            });
        });
}

export default handleProfileSignup;