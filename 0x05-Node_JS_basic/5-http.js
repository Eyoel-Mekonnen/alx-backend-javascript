const http = require('http');

const app = http.createServer();
const port = 1245;
const host = 'localhost';
const dbFile = process.argv.length > 2 ? process.argv[2] : '';
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
    const responseText = 'Hello Holberton School!';
    res.setHeader('Content-Length', Buffer.byteLength(responseText));
    res.end(responseText);
  } else if (req.url === '/students') {
    const responseParts = ['This is the list of our students'];
    countStudents(dbFile)
      .then(({ studentMajor, numberOfStudents }) => {
        responseParts.push(`Number of students: ${numberOfStudents}`);
        Object.entries(studentMajor).forEach(([major, { name, count }]) => {
          responseParts.push(`Number of students in ${major}: ${count}. List: ${name.join(', ')}`);
        });
        const responseText = responseParts.join('\n');
        res.setHeader('Content-Length', Buffer.byteLength(responseText));
        res.end(responseText);
      })
      .catch((error) => {
        responseParts.push(`Error: ${error.message}`);
        const responseText = responseParts.join('\n');
        res.setHeader('Content-Length', Buffer.byteLength(responseText));
        res.statusCode = 500;
        res.end(responseText);
      });
  } else {
    res.statusCode = 404;
    const notFoundText = 'Not Found';
    res.setHeader('Content-Length', Buffer.byteLength(notFoundText));
    res.end(notFoundText);
  }
});

app.listen(port, host, () => {
  process.stdout.write(`Server is listening on ${port}: ${host}`);
});
module.exports = app;
