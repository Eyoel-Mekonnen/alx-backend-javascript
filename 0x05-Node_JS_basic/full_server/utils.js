const fs = require('fs');

const readDatabase = (dbFile) => new Promise((resolve, reject) => {
  fs.readFile(dbFile, 'utf8', (err, data) => {
    if (err) {
      console.log('Error is coming from the above one');
      reject(new Error('Cannot load the database'));
      return;
    }
    const stringFormat = data.trim();
    const arrayFormat = stringFormat.split('\n');
    const studentMajor = {};
    arrayFormat.forEach((line) => {
      const fields = line.split(',');
      const firstName = fields[0];
      const major = fields[3];
      if (!studentMajor[major]) {
        studentMajor[major] = [];
      }
      studentMajor[major].push(firstName);
    });
    resolve({ studentMajor });
  });
});
module.exports = readDatabase;
