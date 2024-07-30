import signupUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function (firstName, lastName, fileName) {
  const promise1 = signupUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  return Promise.allSettled([promise1, promise2])
    .then((values) => {
      const result1 = values[0];
      const result2 = values[1];
      return [result1.firstName, result1.lastName, result2];
    });
}
