import { Teacher } from './main';
describe('Teachers Tests', () => {
  test(('checks teacher properties'), () => {
    const teacher4: Teacher = {
      firstName: 'John',
      fullTimeEmployee: false,
      lastName: 'Doe',
      location: 'London',
      contract: false,
    };
    expect(teacher4.firstName).toBe('John');
    expect(teacher4.fullTimeEmployee).toBe(false);
  });
});
