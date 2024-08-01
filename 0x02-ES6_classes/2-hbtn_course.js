export default class HolbertonCourse {
  constructor (name, length, students) {
    if (typeof name === "string" ) {
      this._name = name;
    } else {
      throw TypeError('Name must be a string');
    }
    if (typeof length === "number") {
      this._length = length;
    } else {
      throw TypeError('Length must be a string');
    }
    if (Array.isArray(students) {
      for (let i = 0; i < students.length; i =+ 1) {
        if (typeof students[i] === "string") {
          throw TypeError('Students must be an array')
        }
      }
      this._students = students;
    }
  }
}
