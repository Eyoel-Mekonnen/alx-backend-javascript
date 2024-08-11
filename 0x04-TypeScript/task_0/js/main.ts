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

function createTable(studentLists: Student[]) {
  const headerRows = ['FirstName', 'LastName', 'Age', 'Location'];
  const table = document.createElement('table');
  const tr1 = document.createElement('tr');
  headerRows.forEach((headers) => {
    const th = document.createElement('th');
    th.textContent = headers;
    tr1.appendChild(th);
  })
  table.appendChild(tr1);

  studentLists.forEach((student) => {
    const tr2 = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.textContent = student.firstname;

    tr2.appendChild(td1);

    const td2 = document.createElement('td');
    td2.textContent = student.lastname;
    tr2.appendChild(td2);

    const td3 = document.createElement('td');
    td3.textContent = student.age.toString();

    tr2.appendChild(td3);

    const td4 = document.createElement('td');
    td4.textContent = student.location;

    tr2.appendChild(td4);

    table.appendChild(tr2);
  })
  return table;
}
const studentLists = [student1, student2];
const table = createTable(studentLists);
document.body.appendChild(table);
