import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName = '', lastName = '', fileName = '') {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => (values.map((o) => ({
      status: o.status,
      values: o.status === 'fulfilled' ? o.value : String(o.reason),
    }))));
}
