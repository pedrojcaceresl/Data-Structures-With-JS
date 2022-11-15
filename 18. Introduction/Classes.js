class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }

  // Class Methods
  static enrollStudents(...students) {
    console.log(students);
  }

  fullName() {
    console.log("EL THIS: ", this);
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies++;
  }

  addScore(scores) {
    this.scores.push(scores);
  }

  calculateAverage() {
    let sum = this.scores.reduce((a, b) => {
      return a + b;
    });
    return Math.floor(sum / this.scores.length);
  }
}

let firstStudent = new Student("Pedro", "Caceres", 3);
let secondStudent = new Student("Juan", "Lopez", 4);

firstStudent.markLate();
firstStudent.markLate();
firstStudent.addScore(10);
firstStudent.addScore(8);
firstStudent.addScore(7);
// console.log(firstStudent.calculateAverage());
console.log(firstStudent.fullName());
// Student.enrollStudents([firstStudent, secondStudent]);
