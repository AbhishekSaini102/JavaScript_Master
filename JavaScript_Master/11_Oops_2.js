class AbstractEmployee {
    AskForPromotion() {
       throw new Error("You have to implement the method AskForPromotion!");
    }
}
class Employee extends AbstractEmployee {
  Name;
  #Company; //private way to declare a variable
  #Age;

  constructor(name, company, age) {
    super();
    this.Name = name;
    this.#Company = company;
    this.#Age = age > 18 ? age : null;
  }

  setName(name) {
    this.Name = name;
  }
  setcompany(company) {
    this.#Company = company;
  }
  setAge(age) {
    if (age >= 18) {
      this.#Age = age;
    }
  }

  getName() {
    return this.Name;
  }
  getCompany() {
    return this.#Company;
  }

  getAge() {
    return this.#Age;
  }

  // InroduceYourself() {
  //     console.log(`Name: ${this.Name}`);
  //     console.log(`Company: ${this.#Company}`);
  //     console.log(`Age: ${this.#Age}`);
  // }

  IntroduceYourself() {
    // Print private fields directly here
    console.log(
      `Employee { Name: '${this.Name}', Company: '${this.#Company}', Age: ${
        this.#Age
      } }`
    );
  }
  AskForPromotion() {
    if (this.#Age > 30) {
      console.log(`${this.Name} got promoted`);
    } else {
      console.log(`${this.Name}, sorry no promotion for you`);
    }
  }

  Work() {
    console.log(`${this.Name} checking Emails and Tasks`);
  }
}

class Manager extends Employee {
  constructor(name, company, age, manage) {
    super(name, company, age);
    this.manage = manage;
  }

  delegateWork() {
    console.log(`${this.Name} is delegating tasks`);
  }
  Work() {
    console.log(`${this.Name} is working`);
  }

  IntroduceYourself() {
    // Call the parent class method
    super.IntroduceYourself();
    // Print additional information specific to Manager
    console.log(`Manages: ${this.manage.join(", ")}`);
  }
}

const employee1 = new Employee('Abhishek', 'Google', 30);
console.log(employee1);
employee1.Work();
employee1.AskForPromotion();
employee1.IntroduceYourself();

const manager1 = new Manager('Camille', 'Google', 30, ['Developer']);
console.log(manager1);

manager1.delegateWork();
manager1.Work();
manager1.AskForPromotion();

const employee2 = manager1;
manager1.Work();
manager1.IntroduceYourself();
