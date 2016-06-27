class SuperClass {
  constructor() {
    this.name = "foo";
    this.age = 20;
  }
}

class SubClass extends SuperClass {
  print() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}
