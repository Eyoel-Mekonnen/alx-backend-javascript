const http = require('http');

const app = http.createServer();
const port = 1245;
const host = 'localhost';
const dbFile = process.argv.length > 2 ? process.argv[2] : '';
const fs = require('fs');

const countStudents = (file) => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
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
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.setHeader('Content-Type', 'text/plain');
    const responseParts = ['This is the list of our students'];
    countStudents(dbFile)
      .then(({ studentMajor, numberOfStudents }) => {
        responseParts.push(`Number of students: ${numberOfStudents}`);
        Object.entries(studentMajor).forEach(([major, { name, count }]) => {
          responseParts.push(`Number of students in ${major}: ${count}. List: ${name.join(', ')}`);
        });
        const responseText = responseParts.join('\n');
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', Buffer.byteLength(responseText));
        res.statusCode = 200;
        res.end(responseText);
      })
      .catch((error) => {
        const responseText = `This is the list of our students\n${error.message}`;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', Buffer.byteLength(responseText));
        res.statusCode = 200;
        res.end(responseText);
      });
  }
});

app.listen(port, host, () => {
  process.stdout.write(`Server is listening on ${port}: ${host}`);
});
module.exports = app;
