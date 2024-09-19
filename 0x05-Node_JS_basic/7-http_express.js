const express = require('express');

const fs = require('fs');
const app = express();
const port = 1245;
const host = 'localhost';
const dbFile = process.argv.length > 2 ? process.argv[2] : '';
const countStudents = (dbFile) => new Promise((resolve, reject) => {
  fsreadFile(dbFile, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const stringFormat = data.trim();
    const arrayFormat = stringFormat.split('\n');
    arrayFormat.shift();
    const studentMajor = {};
    const numberOfStudents = 0;
    arrayFormat.forEach((line) => {
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
    resolve( { studentMajor, numberOfStudents });
  });
});

app.get('/', (_, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  res.send('Hello Holberton School!');
});
app.get('/students', (_, res) => {
  countStudents(dbFile)
    .then(({ studentMajor, numberOfStudents }) => {
      let response = 'This is the list of our students:\n';
      response += `Total number of students: ${numberofStudents}\n`;
      for (const major in studentMajor) {
      response += `Number of students in ${major}: ${studentMajor[major].count}. List: ${studentMajor[major].name.join(',')}\n`;
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.send(response);
      }
    })
    .catch((error) => {
      const responseText = `This is the list of our students\n${error.message}`;
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.send(responseText);
    });
});
app.listen(port, host, () => {
  console.log(`Server Listening on ${port}: ${host}`)
});
