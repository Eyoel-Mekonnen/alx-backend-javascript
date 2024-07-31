import signupUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function (firstName, lastName, fileName) {
  const promise1 = signupUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  return Promise.allSettled([promise1, promise2])
    .then((values) => {
      const array = [];
      for (let i = 0; i < values.length; i += 1) {
        const transformedObject = {
          status: values[i].status,
          value: (() => {
            let value;
            if (values[i].status === 'fulfilled') {
              value = values[i].value;
            } else {
              value = String(values[i].reason);
            }
            return value;
          })(),
        };
        array.push(transformedObject);
      }
      return array;
    });
}
