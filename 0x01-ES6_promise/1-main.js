import getFullResponseFromAPI from './1-promise.js';

getFullResponseFromAPI(true)
    .then(console.log)
    .catch(console.error);

getFullResponseFromAPI(false)
    .then(console.log)
    .catch(console.error);