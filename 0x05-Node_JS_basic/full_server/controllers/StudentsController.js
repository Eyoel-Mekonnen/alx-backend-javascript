const readDatabase = require('../utils');

class StudentController {
  static getAllStudents(request, response) {
    const dbFile = process.argv.length > 2 ? process.argv[2] : '';
    response.statusCode = 200;
    readDatabase(dbFile)
      .then(({ studentMajor }) => {
        const comparatorFunction = (a, b) => {
          if (a.toLowerCase() < b.toLowerCase()) {
            return -1;
          }
          if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
          }
          return 0;
        };
        const orderedKey = Object.keys(studentMajor).sort(comparatorFunction);
        const newStudentObject = {};
        orderedKey.forEach((key) => {
          newStudentObject[key] = studentMajor[key];
        });
        let responseText = 'This is the list of our students\n';
        Object.keys(newStudentObject).forEach((key) => {
          const count = newStudentObject[key].length;
          responseText += `Number of students in ${key}: ${count}. List: ${newStudentObject[key].join(', ')}\n`;
        });
        responseText = responseText.trimEnd();
        response.send(responseText);
      })
      .catch((err) => {
        response.statusCode = 500;
        response.send(`${err.message}\n`);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const dbFile = process.argv.length > 2 ? process.argv[2] : '';
    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE\n');
      return;
    }
    readDatabase(dbFile)
      .then(({ studentMajor }) => {
        const { major } = request.params;
        response.statusCode = 200;
        let responseText = `List: ${studentMajor[major].join(', ')}\n`;
        responseText = responseText.trimEnd();
        response.send(responseText);
      })
      .catch((error) => {
        response.statusCode = 500;
        response.send(`${error.message}\n`);
      });
  }
}
module.exports = StudentController;
