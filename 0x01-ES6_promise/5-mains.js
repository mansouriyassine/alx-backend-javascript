import uploadPhoto from './5-photo-reject.js';

uploadPhoto('guillaume.jpg')
    .catch(error => console.error(error.message));
