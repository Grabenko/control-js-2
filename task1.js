const person = {
  name: 'John',
  age: 30,
  gender: 'male',
  introduce() {
    return `Мене звати ${this.name}, мені ${this.age} років, я ${this.gender}.`;
  },
  changeName(newName) {
    this.name = newName;
  }
};

console.log(person.introduce()); // Мене звати John, мені 30 років, я male.
person.changeName('Mike');
console.log(person.introduce()); // Мене звати Mike, мені 30 років, я male.
