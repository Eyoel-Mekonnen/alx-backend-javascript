namespace Subjects {
  export interface Teacher {
    experienceTeachingC: number;
  }
  export class Cpp extends Subjects.Subject {
    getRequirments () {
      return `Here is the list of requirements for Cpp`;
    }
    getAvailableTeacher() {
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
