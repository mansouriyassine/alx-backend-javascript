#!/usr/bin/node
// 100-await.js
import { uploadPhoto, createUser } from './utils.js';

/**
 * Calls uploadPhoto and createUser functions asynchronously, returns an object with
 * their responses or nulls if any of them fails.
 *
 * @return {Promise<Object>} An object with photo and user details or nulls.
 */
async function asyncUploadUser() {
    try {
        const photo = await uploadPhoto();
        const user = await createUser();
        return { photo, user };
    } catch (error) {
        return { photo: null, user: null };
    }
}

export default asyncUploadUser;