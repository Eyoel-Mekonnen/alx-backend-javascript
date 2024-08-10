interface Student {
  firstname: string;
  lastname: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstname: 'Eyoel',
  lastname: 'Mekonnen',
  age: 27,
  location: 'Addis Ababa',
};

const student2: Student = {
  firstname: 'Kaleb',
  lastname: 'Mekonnen',
  age: 20,
  location: 'Addis Ababa',
};

function createTable(studentList: Student[]) {
  let table = `<table>`;
  table += `<tr><th>FirstName</th><th>LastName</th><th>Age</th><th>Location</th></tr>`;
  studentList.forEach((item) => {
    table += `<tr><td>${item.firstname}</td><td>${item.lastname}</td><td>${item.age}</td><td>${item.location}</td></tr>`;
  });
  table += `</table>`
  return table;
}
const studentList = [student1, student2];
createTable(studentList);
