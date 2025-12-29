
function Speaker() {
  if (this.constructor === Speaker) {
    throw new Error("Interface Speaker não pode ser instanciada diretamente.");
  }
}

Speaker.prototype.speak = function () {
  throw new Error("Método speak() deve ser implementado.");
};
class Person extends Speaker {
  speak() {
    console.log("Olá, eu estou falando!");
  }
}

const p = new Person();
p.speak();




class Speaker {
  constructor() {
    if (new.target === Speaker) {
      throw new Error("A interface Speaker não pode ser instanciada.");
    }
  }

  speak() {
    throw new Error("O método speak() deve ser implementado.");
  }
}
class Person extends Speaker {
  speak() {
    console.log("Olá! Estou falando.");
  }
}

const person = new Person();
person.speak();




class Speaker {
  constructor() {
    if (new.target === Speaker) {
      throw new Error("A interface Speaker não pode ser instanciada.");
    }
  }

  speak() {
    throw new Error("O método speak() deve ser implementado.");
  }
}

class Person extends Speaker {
  speak() {
    console.log("Olá! Eu sou uma pessoa e estou falando.");
  }
}

const person = new Person();
person.speak();





class Speaker {
  constructor() {
    if (new.target === Speaker) {
      throw new Error("A interface Speaker não pode ser instanciada.");
    }
  }

  speak() {
    throw new Error("O método speak() deve ser implementado.");
  }
}

class Person extends Speaker {
  speak() {
    console.log("Estou falando.");
  }
}

const person = new Person();
person.speak();




class Greeter {
  constructor() {
    if (new.target === Greeter) {
      throw new Error("A interface Greeter não pode ser instanciada.");
    }
  }

  greet() {
    throw new Error("O método greet() deve ser implementado e retornar um resultado.");
  }
}
class Person extends Greeter {
  greet() {
    return "Olá!";
  }
}

const person = new Person();
console.log(person.greet());




class Greeter {
  constructor() {
    if (new.target === Greeter) {
      throw new Error("A interface Greeter não pode ser instanciada.");
    }
  }

  greet() {
    throw new Error("O método greet() deve ser implementado e retornar um resultado.");
  }
}
class Person extends Greeter {
  greet() {
    return "Olá!";
  }
}

const person = new Person();
console.log(person.greet());





class Aluno {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Professor {
  constructor(nome, disciplina) {
    this.nome = nome;
    this.disciplina = disciplina;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e ensino ${this.disciplina}.`);
  }
}

const aluno1 = new Aluno("João", 16);
aluno1.apresentar();

const professor1 = new Professor("Maria", "Matemática");
professor1.apresentar();



class Greeter {
  constructor() {
    if (new.target === Greeter) {
      throw new Error("A interface Greeter não pode ser instanciada.");
    }
  }

  greet() {
    throw new Error("O método greet() deve ser implementado e retornar um resultado.");
  }
}

class Aluno extends Greeter {
  constructor(nome, idade) {
    super();
    this.nome = nome;
    this.idade = idade;
  }

  greet() {
    return `Olá, meu nome é ${this.nome} e sou aluno.`;
  }
}

class Professor extends Greeter {
  constructor(nome, disciplina) {
    super();
    this.nome = nome;
    this.disciplina = disciplina;
  }

  greet() {
    return `Olá, meu nome é ${this.nome} e ensino ${this.disciplina}.`;
  }
}

const aluno1 = new Aluno("João", 16);
console.log(aluno1.greet());

const professor1 = new Professor("Maria", "Matemática");
console.log(professor1.greet());





class Greeter {
  constructor() {
    if (new.target === Greeter) {
      throw new Error("A interface Greeter não pode ser instanciada.");
    }
  }

  greet() {
    throw new Error("O método greet() deve ser implementado.");
  }
}

class Aluno extends Greeter {
  constructor(nome, idade) {
    super();
    this.nome = nome;
    this.idade = idade;
  }

  greet() {
    console.log(`Olá! Eu sou o aluno ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Professor extends Greeter {
  constructor(nome, disciplina) {
    super();
    this.nome = nome;
    this.disciplina = disciplina;
  }

  greet() {
    console.log(`Olá! Eu sou o professor ${this.nome} e ensino ${this.disciplina}.`);
  }
}

const aluno1 = new Aluno("João", 16);
aluno1.greet();

const professor1 = new Professor("Maria", "Matemática");
professor1.greet(); 





class Animal {
  constructor() {
    if (new.target === Animal) {
      throw new Error("A interface Animal não pode ser instanciada.");
    }
  }

  makeSound() {
    throw new Error("O método makeSound() deve ser implementado e retornar um resultado.");
  }
}
class Cachorro extends Animal {
  makeSound() {
    return "Au Au!";
  }
}

class Gato extends Animal {
  makeSound() {
    return "Miau!";
  }
}

const cachorro = new Cachorro();
console.log(cachorro.makeSound()); 

const gato = new Gato();
console.log(gato.makeSound()); 





class Animal {
  constructor() {
    if (new.target === Animal) {
      throw new Error("A interface Animal não pode ser instanciada.");
    }
  }

  makeSound() {
    throw new Error("O método makeSound() deve ser implementado e retornar um resultado.");
  }
}
class Cachorro extends Animal {
  makeSound() {
    return "Au Au!";
  }
}

class Gato extends Animal {
  makeSound() {
    return "Miau!";
  }
}

const cachorro = new Cachorro();
console.log(cachorro.makeSound()); 

const gato = new Gato();
console.log(gato.makeSound()); 





class Animal {
  constructor() {
    if (new.target === Animal) {
      throw new Error("A interface Animal não pode ser instanciada.");
    }
  }

  makeSound() {
    throw new Error("O método makeSound() deve ser implementado e retornar um resultado.");
  }
}

class Cachorro extends Animal {
  makeSound() {
    return "Au Au!";
  }
}

class Gato extends Animal {
  makeSound() {
    return "Miau!";
  }
}

const cachorro = new Cachorro();
console.log(cachorro.makeSound()); 

const gato = new Gato();
console.log(gato.makeSound()); 




class Animal {
  constructor() {
    if (new.target === Animal) {
      throw new Error("A interface Animal não pode ser instanciada.");
    }
  }

  makeSound() {
    throw new Error("O método makeSound() deve ser implementado e retornar um resultado.");
  }
}

class Cachorro extends Animal {
  makeSound() {
    return "Au Au!";
  }
}

class Gato extends Animal {
  makeSound() {
    return "Miau!";
  }
}

const cachorro = new Cachorro();
console.log(cachorro.makeSound()); 

const gato = new Gato();
console.log(gato.makeSound()); 





class Animal {
  constructor() {
    if (new.target === Animal) {
      throw new Error("A interface Animal não pode ser instanciada.");
    }
  }

  makeSound() {
    throw new Error("O método makeSound() deve ser implementado e retornar um resultado.");
  }
}

class Cachorro extends Animal {
  makeSound() {
    return "Au Au!";
  }
}

class Gato extends Animal {
  makeSound() {
    return "Miau!";
  }
}

function playSound(animal) {
  if (!(animal instanceof Animal)) {
    throw new Error("O parâmetro deve ser um Animal.");
  }
  console.log(animal.makeSound());
}

const cachorro = new Cachorro();
const gato = new Gato();

playSound(cachorro);
playSound(gato);     





class Animal {
  constructor() {
    if (new.target === Animal) {
      throw new Error("A interface Animal não pode ser instanciada.");
    }
  }

  makeSound() {
    throw new Error("O método makeSound() deve ser implementado e retornar um resultado.");
  }
}

class Cachorro extends Animal {
  makeSound() {
    return "Au Au!";
  }
}

class Gato extends Animal {
  makeSound() {
    return "Miau!";
  }
}


function playSound(animal) {
  
  console.log(animal.makeSound());
}

const cachorro = new Cachorro();
const gato = new Gato();

playSound(cachorro); 
playSound(gato);     





class Veiculo {
  constructor(marca, modelo) {
    if (new.target === Veiculo) {
      throw new Error("A classe Veiculo é abstrata e não pode ser instanciada diretamente.");
    }
    this.marca = marca;
    this.modelo = modelo;
  }

  mover() {
    throw new Error("O método mover() deve ser implementado nas subclasses.");
  }
}

class Carro extends Veiculo {
  mover() {
    console.log(`${this.marca} ${this.modelo} está dirigindo.`);
  }
}

class Moto extends Veiculo {
  mover() {
    console.log(`${this.marca} ${this.modelo} está acelerando.`);
  }
}


const carro = new Carro("Toyota", "Corolla");
carro.mover(); 

const moto = new Moto("Honda", "CB500");
moto.mover();  




class Veiculo {
  constructor(marca, modelo) {
    if (new.target === Veiculo) {
      throw new Error("A classe Veiculo é abstrata e não pode ser instanciada diretamente.");
    }
    this.marca = marca;
    this.modelo = modelo;
  }


  mover() {
    console.log(`${this.marca} ${this.modelo} está se movendo.`);
  }
}

class Carro extends Veiculo {
  
  mover() {
    console.log(`${this.marca} ${this.modelo} está dirigindo na estrada.`);
  }
}

class Moto extends Veiculo {

}

const carro = new Carro("Toyota", "Corolla");
carro.mover(); 

const moto = new Moto("Honda", "CB500");
moto.mover(); 





class Veiculo {
  constructor(marca, modelo) {
    if (new.target === Veiculo) {
      throw new Error("A classe Veiculo é abstrata e não pode ser instanciada diretamente.");
    }
    this.marca = marca;
    this.modelo = modelo;
  }

  mover() {
    console.log(`${this.marca} ${this.modelo} está se movendo.`);
  }

  
  makeNoise() {
    throw new Error("O método makeNoise() deve ser implementado nas subclasses.");
  }
}

class Carro extends Veiculo {
  makeNoise() {
    console.log("Vrum vrum!");
  }
}


class Moto extends Veiculo {
  makeNoise() {
    console.log("Brrrr!");
  }
}

// Testando
const carro = new Carro("Toyota", "Corolla");
carro.mover();      
carro.makeNoise();  

const moto = new Moto("Honda", "CB500");
moto.mover();       
moto.makeNoise();  





class Vehicle {
  constructor(brand, model) {
    if (new.target === Vehicle) {
      throw new Error("A classe Vehicle é abstrata e não pode ser instanciada diretamente.");
    }
    this.brand = brand;
    this.model = model;
  }

  
  mover() {
    console.log(`${this.brand} ${this.model} está se movendo.`);
  }

  
  makeNoise() {
    throw new Error("O método makeNoise() deve ser implementado nas subclasses.");
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand, model);
  }

  
  makeNoise() {
    console.log("Vrum vrum!");
  }
}


const car = new Car("Toyota", "Corolla");
car.mover();      
car.makeNoise();  





class Vehicle {
  constructor(brand, model) {
    if (new.target === Vehicle) {
      throw new Error("A classe Vehicle é abstrata e não pode ser instanciada diretamente.");
    }
    this.brand = brand;
    this.model = model;
  }

  
  mover() {
    console.log(`${this.brand} ${this.model} está se movendo.`);
  }

  
  makeNoise() {
    throw new Error("O método makeNoise() deve ser implementado nas subclasses.");
  }
}


class Car extends Vehicle {
  constructor(brand, model) {
    super(brand, model);
  }

  
  makeNoise() {
    console.log("Vrum vrum!"); 
  }
}


const car = new Car("Toyota", "Corolla");
car.mover();      
car.makeNoise();  





class Vehicle {
  constructor(brand, model) {
    if (new.target === Vehicle) {
      throw new Error("A classe Vehicle é abstrata e não pode ser instanciada diretamente.");
    }
    this.brand = brand;
    this.model = model;
  }

  
  mover() {
    console.log(`${this.brand} ${this.model} está se movendo.`);
  }

  
  makeNoise() {
    throw new Error("O método makeNoise() deve ser implementado nas subclasses.");
  }
}


class Car extends Vehicle {
  makeNoise() {
    console.log("Vrum vrum!");
  }
}

const car = new Car("Toyota", "Corolla");

car.mover();      
car.makeNoise(); 





class Employee {
  constructor(name, salary) {
    if (new.target === Employee) {
      throw new Error("A classe Employee é abstrata e não pode ser instanciada diretamente.");
    }
    this.name = name;
    this.salary = salary;
  }

  
  displayInfo() {
    console.log(`Funcionário: ${this.name}, Salário: R$${this.salary}`);
  }

  
  calculateBonus() {
    throw new Error("O método calculateBonus() deve ser implementado nas subclasses e retornar um resultado.");
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  
  calculateBonus() {
    return this.salary * 0.2; 
  }
}

const manager = new Manager("Ana", 5000, "TI");
manager.displayInfo();                 
console.log(manager.calculateBonus()); 






class Employee {
  
  static nome = "Funcionário";

  constructor(salary) {
    if (new.target === Employee) {
      throw new Error("A classe Employee é abstrata e não pode ser instanciada diretamente.");
    }
    this.salary = salary;
  }

  
  displayInfo() {
    console.log(`${Employee.nome}, Salário: R$${this.salary}`);
  }

  
  calculateBonus() {
    throw new Error("O método calculateBonus() deve ser implementado nas subclasses e retornar um resultado.");
  }
}


class Manager extends Employee {
  calculateBonus() {
    return this.salary * 0.2;
  }
}


const manager1 = new Manager(5000);
manager1.displayInfo(); 


Employee.nome = "Gerente";
manager1.displayInfo(); 

const manager2 = new Manager(7000);
manager2.displayInfo(); 





class Employee {
  constructor(name, salary) {
    if (new.target === Employee) {
      throw new Error("A classe Employee é abstrata e não pode ser instanciada diretamente.");
    }
    this.name = name;   
    this.salary = salary;
  }

  
  displayInfo() {
    console.log(`Funcionário: ${this.name}, Salário: R$${this.salary}`);
  }

  
  clockIn() {
    console.log(`${this.name} bateu o ponto.`);
  }

  
  calculateBonus() {
    throw new Error("O método calculateBonus() deve ser implementado nas subclasses e retornar um resultado.");
  }
}

class Manager extends Employee {
  calculateBonus() {
    return this.salary * 0.2;
  }
}

const manager = new Manager("Ana", 5000);
manager.displayInfo(); 





class Employee {
  constructor(name, salary) {
    if (new.target === Employee) {
      throw new Error("A classe Employee é abstrata e não pode ser instanciada diretamente.");
    }
    this.name = name;
    this.salary = salary;
  }

  
  displayInfo() {
    console.log(`Funcionário: ${this.name}, Salário: R$${this.salary}`);
  }

  
  clockIn() {
    console.log(`${this.name} bateu o ponto.`);
  }

  
  trabalho() {
    throw new Error("O método trabalho() deve ser implementado nas subclasses.");
  }

  
  calculateBonus() {
    throw new Error("O método calculateBonus() deve ser implementado nas subclasses e retornar um resultado.");
  }
}


class Manager extends Employee {
  trabalho() {
    console.log(`${this.name} está gerenciando a equipe.`);
  }

  calculateBonus() {
    return this.salary * 0.2;
  }
}


class Developer extends Employee {
  trabalho() {
    console.log(`${this.name} está escrevendo código.`);
  }

  calculateBonus() {
    return this.salary * 0.15;
  }
}


const manager = new Manager("Ana", 5000);
manager.clockIn();   
manager.trabalho();  

const dev = new Developer("João", 4000);
dev.clockIn();     
dev.trabalho();   





class Employee {
  constructor(name, salary) {
    if (new.target === Employee) {
      throw new Error("A classe Employee é abstrata e não pode ser instanciada diretamente.");
    }
    this.name = name;
    this.salary = salary;
  }

  
  displayInfo() {
    console.log(`Funcionário: ${this.name}, Salário: R$${this.salary}`);
  }

  
  clockIn() {
    console.log(`${this.name} bateu o ponto.`);
  }

  
  trabalho() {
    throw new Error("O método trabalho() deve ser implementado nas subclasses.");
  }

  calculateBonus() {
    throw new Error("O método calculateBonus() deve ser implementado nas subclasses e retornar um resultado.");
  }
}


class Developer extends Employee {
  constructor(name, salary, language) {
    super(name, salary);
    this.language = language;
  }

  
  trabalho() {
    console.log(`${this.name} está escrevendo código em ${this.language}.`);
  }

  calculateBonus() {
    return this.salary * 0.15; 
  }
}


const dev = new Developer("João", 4000, "JavaScript");
dev.displayInfo();  
dev.clockIn();       
dev.trabalho();      
console.log(dev.calculateBonus());







class Employee {
  constructor(name, salary) {
    if (new.target === Employee) {
      throw new Error("A classe Employee é abstrata e não pode ser instanciada diretamente.");
    }
    this.name = name;
    this.salary = salary;
  }

  
  displayInfo() {
    console.log(`Funcionário: ${this.name}, Salário: R$${this.salary}`);
  }

  
  clockIn() {
    console.log(`${this.name} bateu o ponto.`);
  }

  
  work() {
    throw new Error("O método work() deve ser implementado nas subclasses.");
  }

  
  calculateBonus() {
    throw new Error("O método calculateBonus() deve ser implementado nas subclasses e retornar um resultado.");
  }
}


class Developer extends Employee {
  constructor(name, salary, language) {
    super(name, salary);
    this.language = language;
  }

  
  work() {
    console.log(`${this.name} está escrevendo código em ${this.language}.`);
  }

  
  calculateBonus() {
    return this.salary * 0.15; 
  }
}


const dev = new Developer("João", 4000, "JavaScript");
dev.displayInfo(); 
dev.clockIn();   
dev.work();       
console.log(dev.calculateBonus()); 





class Employee {
  constructor(name, salary) {
    if (new.target === Employee) {
      throw new Error("A classe Employee é abstrata e não pode ser instanciada diretamente.");
    }
    this.name = name;
    this.salary = salary;
  }

  
  displayInfo() {
    console.log(`Funcionário: ${this.name}, Salário: R$${this.salary}`);
  }

  
  clockIn() {
    console.log(`${this.name} bateu o ponto.`);
  }

  
  work() {
    throw new Error("O método work() deve ser implementado nas subclasses.");
  }

  
  calculateBonus() {
    throw new Error("O método calculateBonus() deve ser implementado nas subclasses e retornar um resultado.");
  }
}


class Developer extends Employee {
  constructor(name, salary, language) {
    super(name, salary);
    this.language = language;
  }

  
  work() {
    console.log(`${this.name} está escrevendo código em ${this.language}.`);
  }

  
  calculateBonus() {
    return this.salary * 0.15;
  }
}


const dev = new Developer("João", 4000, "JavaScript");


dev.clockIn(); 
dev.work();  






















