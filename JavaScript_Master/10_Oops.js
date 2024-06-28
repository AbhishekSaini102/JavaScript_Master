class AbstractEmployee {
  AskForPromotion() {
    throw new Error("You have to implement the method AskForPromotion!");
  }
}

class Employee extends AbstractEmployee {
  #company; 
  #age;

  constructor(name, company, age) {
    super();
    this.Name = name;
    this.#company = company;
    this.#age = age >= 18 ? age : null;
  }

  setName(name) {
    this.Name = name;
  }

  setCompany(company) {
    this.#company = company;
  }

  setAge(age) {
    if (age >= 18) {
      this.#age = age;
    }
  }

  getName() {
    return this.Name;
  }

  getCompany() {
    return this.#company;
  }

  getAge() {
    return this.#age;
  }

  IntroduceYourself() {
    console.log(`Name: ${this.Name}`);
    console.log(`Company: ${this.#company}`);
    console.log(`Age: ${this.#age}`);
  }

  AskForPromotion() {
    if (this.#age > 30) {
      console.log(`${this.Name} got promoted`);
    } else {
      console.log(`${this.Name}, sorry no promotion for you`);
    }
  }

  Work() {
    console.log(`${this.Name} checking Emails and Tasks`);
  }
}

class Developer extends Employee {
  constructor(name, company, age, favProgrammingLanguage) {
    super(name, company, age);
    this.FavProgrammingLanguage = favProgrammingLanguage;
  }

  FixBug() {
    console.log(
      `${this.Name} has fixed bug using ${this.FavProgrammingLanguage}`
    );
  }

  Work() {
    console.log(`${this.Name} is coding in ${this.FavProgrammingLanguage}`);
  }
}

class Teacher extends Employee {
  constructor(name, company, age, subject) {
    super(name, company, age);
    this.Subject = subject;
  }

  PrepareLesson() {
    console.log(`${this.Name} is preparing ${this.Subject} lesson`);
  }

  Work() {
    console.log(`${this.Name} Is Reading`);
  }
}

// Test the implementation
const employee1 = new Employee("Abhishek Saini", "Google", 24);
employee1.setAge(31);
console.log(
  `Name: ${employee1.getName()} Company: ${employee1.getCompany()} Age: ${employee1.getAge()}`
);
employee1.AskForPromotion();

const d = new Developer("Abhishek Saini", "Google", 24, "C++");
d.FixBug();
d.AskForPromotion();

const t = new Teacher("Neelam", "SSS", 30, "Computer Science");
t.PrepareLesson();
t.AskForPromotion();
t.Subject = "Maths";
t.PrepareLesson();

const e2 = t;
e2.Work();
