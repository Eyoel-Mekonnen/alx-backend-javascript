export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsofExperience?: number
  location: string;
  [placeHolder: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
}
//console.log(director1);

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function printTeacher (firstName:string, lastName:string): string {
  return `${firstName[0]}.${lastName}`;
}

interface studentclass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}	

class studentClass implements studentclass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework (): string {
    return `Currently working`;
  }
  displayName (): string {
    return this.firstName;
  }
}

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return `Working from home`;
  }
  getCoffeeBreak(): string {
    return `Getting a coffee break`;
  }
  workDirectorTasks(): string {
    return `Getting to director tasks`;
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return `Cannot work from home`;
  }
  getCoffeeBreak(): string {
    return `Cannot have a break`;
  }
  workTeacherTasks(): string {
    return `Getting to work`;
  }
}

function createEmployee(salary: number | string):Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    const teacher = new Teacher();
    return teacher;
  }
  const director = new Director();
  return director;
}
console.log(printTeacher("John", "Doe"));

