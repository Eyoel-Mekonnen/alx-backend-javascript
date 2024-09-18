const countStudents = (file) => {
  const fs = require('fs'); // eslint-disable-line global-require
  try {
    const data = fs.readFileSync(file, 'utf8');
    const trimmedData = data.trim();
    const arrayData = trimmedData.split('\n');
    arrayData.shift();
    let numberOfStudents = 0;
    const studentMajor = {};
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
    console.log(`Number of students: ${numberOfStudents}`);
    console.log(`Number of students in CS: ${studentMajor.CS.count}. List: ${studentMajor.CS.name}`);
    console.log(`Number of students in SWE: ${studentMajor.SWE.count}. List: ${studentMajor.SWE.name}`);
  } catch (err) {
    console.error(err);
  }
};
module.exports = countStudents;
