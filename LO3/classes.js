// ES6 Classes

class Person {
    constructor(firstName, lastName, dob) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthday = new Date(dob);
    }
  
    calculateAge() {
      const diff = Date.now() - this.birthday.getTimezoneOffset();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  
    getsMrried(newLatName) {
      this.lastName = newLastName;
    }
  
    greeting() {
      return `Hello there ${this.firstName} ${this.lastName}`;
    }
  
    static addNumbers(x, y) {
      return x + y;
    }
  }
  
  const cheenamae = new Person('Cheenamae', 'Lee', '02-20-00');
  
  cheenamae.getsMarried('Garcia');
  console.log(cheenamae);
  
  console.log(Person.addNumbers(1,2));
  
  