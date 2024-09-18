const http = require('http');

const app = http.createServer();
const port = 1245;
const host = 'localhost';
const dbFile = process.argv[2];
const fs = require('fs');

const countStudents = (file) => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the Database'));
      return;
    }
    const stringFormat = data.trim();
    const arrayData = stringFormat.split('\n');
    if (arrayData.length <= 1) {
      console.log('No data in the file');
      resolve();
      return;
    }
    arrayData.shift();
    const studentMajor = {};
    let numberOfStudents = 0;
    arrayData.forEach((line) => {
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
    resolve({ studentMajor, numberOfStudents });
  });
});

app.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.statusCode = 200;
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(dbFile)
      .then(({ studentMajor, numberOfStudents }) => {
        res.write(`Number of students: ${numberOfStudents}\n`);
        Object.entries(studentMajor).forEach(([major, { name, count }]) => {
          res.write(`Number of students in ${major}: ${count}. List: ${name.join(', ')}`);
        });
        res.end();
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end(`Error: ${error.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, host, () => {
  process.stdout.write(`Server is listening on ${port}: ${host}`);
});
module.exports = app;
