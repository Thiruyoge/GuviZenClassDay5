class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

// Create an instance of the Person class
const person1 = new Person("John Doe", 30, "123 Main Street, City");

// Access the properties of the person
console.log("Name:", person1.name);
console.log("Age:", person1.age);
console.log("Address:", person1.address);
