// Prototype Inheritance
// Person contructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lasttName = lastName;
  }
  
  // Greeting
  Person.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  
  const person1 = new Person('ITcher', 'Jean');
  
  console.log(person1.greeting());
  
  // Customer constructor
  function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);
  
    this.phone = phone;
    this.membership = membership
  }
  
  // Inherit the Person prototype methods
  Customer.prototype = Object.create(Person.prototype);
  
  // Make customer.prototype return Customer
  Customer.prototype.constructor = Customer;
  
  
  // Create customer
  const customer1 = new Customer('Maila', 'Mejia', '555-33-222', 'Standard');
  
  console.log(customer);