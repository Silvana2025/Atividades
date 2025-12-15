```
class Vehicle {
  constructor(type) {
    this.type = type;
  }

  move() {
    console.log(`O ${this.type} está se movendo.`);
  }
}
const car = new Vehicle("carro");
car.move();






class Car {
  constructor(type) {
    this.type = type;
  }

  move() {
    console.log(`O ${this.type} está se movendo.`);
  }
}

class FastCar extends Car {
  constructor(type) {
    super(type);  
  }

  move() {
    super.move(); 
    console.log(`O ${this.type} está dirigindo rápido.`); 
  }
}
const c = new FastCar("esportivo");
c.move();





const carro = new FastCar("esportivo");
carro.move();





class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Olá, eu sou ${this.name}.`;
  }
}
const p = new Person("Ana");
console.log(p.greet());





class Person {
  constructor(name) {
    this.name = name;
  }
greet() {
    return `Olá, eu sou ${this.name}.`;
  }
}

class Student extends Person {
  constructor(name) {
    super(name); 
  }

  greet() {
    const baseGreeting = super.greet();
    console.log(baseGreeting);
    console.log("Estou estudando agora.");
  }
}

const s = new Student("Carlos");
s.greet();





class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Olá, eu sou ${this.name}.`;
  }
}
class Student extends Person {
  constructor(name) {
    super(name); 
  }

  greet() {
    const baseGreeting = super.greet(); 
    console.log(baseGreeting);          
    console.log("Estou estudando agora."); 
  }
}
const aluno = new Student("João");
aluno.greet();





class Appliance {
  constructor(marca) {
    this.marca = marca;
  }

  ligar() {
    return `O aparelho ${this.marca} agora está ligado.`;
  }
}
const aparelho = new Appliance("LG");
console.log(aparelho.ligar());





class Appliance {
  constructor(marca) {
    this.marca = marca;
  }

  turnOn() {
    console.log(`O aparelho ${this.marca} agora está ligado.`);
  }
}

class Microwave extends Appliance {
  constructor(marca) {
    super(marca); 
  }

  turnOn() {
    super.turnOn(); 
    console.log(`O micro-ondas ${this.marca} está aquecendo.`);
  }
}

const micro = new Microwave("Philco");
micro.turnOn();




class Appliance {
  constructor(marca) {
    this.marca = marca;
  }

  turnOn() {
    console.log(`O aparelho ${this.marca} agora está ligado.`);
  }
}

class Microwave extends Appliance {
  constructor(marca) {
    super(marca);
  }

  turnOn() {
    super.turnOn(); 
    console.log(`O micro-ondas ${this.marca} está aquecendo.`);
  }
}

const microondas = new Microwave("Electrolux");
microondas.turnOn();




class Animal {
  constructor(name) {
    this.name = name;
  }

  info() {
    console.log(`Este animal se chama ${this.name}.`);
  }
}

const a = new Animal("Leão");
a.info();





class Animal {
  constructor(name) {
    this.name = name;
  }

  info() {
    console.log(`This animal is called ${this.name}.`);
  }
}

class Bird extends Animal {
  constructor(name, canFly) {
    super(name);       
    this.canFly = canFly; 
  }

  info() {
    super.info(); 
    if (this.canFly) {
      console.log("It can fly.");
    } else {
      console.log("It cannot fly.");
    }
  }

  sing() {
    console.log(`🎵 ${this.name} is singing.`);
  }
}


const parrot = new Bird("Polly", true);
parrot.info();
parrot.sing();

const penguin = new Bird("Pingu", false);
penguin.info();
penguin.sing();






class Animal {
  constructor(name) {
    this.name = name;
  }

  info() {
    console.log(`This animal is called ${this.name}.`);
  }
}

class Bird extends Animal {
  constructor(name, canFly) {
    super(name);        
    this.canFly = canFly;
  }

  info() {
    super.info();      
    if (this.canFly) {
      console.log("It can fly.");
    } else {
      console.log("It cannot fly.");
    }
  }

  sing() {
    console.log(`🎵 ${this.name} is singing.`);
  }
}

const aguia = new Bird("Águia", true);
const pinguim = new Bird("Pinguim", false);


aguia.info();
aguia.sing();

pinguim.info();
pinguim.sing();





class Animal {
  constructor(name) {
    this.name = name;
  }

  info() {
    console.log(`This animal is called ${this.name}.`);
  }
}

class Bird extends Animal {
  constructor(name, canFly) {
    super(name);
    this.canFly = canFly;
  }

  info() {
    super.info();
    if (this.canFly) {
      console.log("It can fly.");
    } else {
      console.log("It cannot fly.");
    }
  }

  sing() {
    console.log(`🎵 ${this.name} is singing.`);
  }
}

const aguia = new Bird("Águia", true);
const pinguim = new Bird("Pinguim", false);

aguia.info();
aguia.sing();

pinguim.info();
pinguim.sing();
```
