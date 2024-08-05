export default function getListStudents() {
  const array = [];
  const obj1 = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };
  const obj2 = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };
  const obj3 = {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  };
  array.push(obj1);
  array.push(obj2);
  array.push(obj3);
  return array;
}
