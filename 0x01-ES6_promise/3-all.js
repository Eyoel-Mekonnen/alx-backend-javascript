import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  Promise.all([promise1, promise2])
    .then((values) => {
      const result1 = values[0];
      const result2 = values[1];
      console.log(`${result1.body} ${result2.firstName} ${result2.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
