class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name +
      ' makes a noise.');
  }
}

class Dog extends Animal {
  constructor(name, color = 'white') {
    super(name);
    this.color = color;
  }

  speak() {
    console.log(this.name + ' barks.');
  }
}

class Lion extends Animal {
  constructor(name, color = 'ochre') {
    super(name);
    this.color = color;
  }

  speak() {
    console.log(this.name + ' roars.');
  }
}

let a = new Animal('Snowy');
a.speak();

let d = new Dog('Tommy');
d.speak();

let l = new Lion('Leo');
l.speak();