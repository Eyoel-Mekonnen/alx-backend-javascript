const fs = require('fs');

const countStudents = (file) => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const stringFormat = data.trim();
    const dataRead = stringFormat.split('\n');
    if (dataRead.length <= 1) {
      console.log('No data in the file');
      resolve();
      return;
    }
    dataRead.shift();
    const studentMajor = {};
    let numberOfStudents = 0;
    dataRead.forEach((line) => {
      const fields = line.split(',');
      const firstName = fields[0];
      const major = fields[3];
      if (!studentMajor[major]) {
        studentMajor[major] = { name: [], count: 0 };
      }
      studentMajor[major].name.push(firstName);
      studentMajor[major].count += 1;
      numberOfStudents += 1;
    });
    console.log(`Number of students: ${numberOfStudents}`);
    Object.entries(studentMajor).forEach(([major, { name, count }]) => {
      console.log(`Number of students in ${major}: ${count}. List: ${name.join(', ')}`);
    });
    resolve({ studentMajor, numberOfStudents });
  });
});
module.exports = countStudents;
