let personA = {
    firstName: 'John',
    lastName: 'Doe',
    age: 43
}

console.log(personA.age); // 43
personA.isTacky = true;

console.log(personA.isTacky); // true
console.log(personA);


let person = {
    firstName: 'Michael',
    lastName: 'Scott',
    age: 34,
};
// console.log(person.firstName);
// console.log(person['firstName']);


// Destructure:
for (let objectKey in person) {
    // console.log(`${objectKey}: ${person.objectKey}`)
}''

person.job = 'Web Developer';
person.pets = ['chicken', 'duck', 'turtle'];
person.pets.push('Dog'); 

console.log(`Favorite animal is: ${person.pets[3]}`);
console.log(person);

person.job = 'Web Developer';
person.pets = ['chicken', 'duck', 'hamster'];
// console.log(person);
person.pets.push('Dog');
// console.log(person.pets[1]);


let meal = {
    appetizer: 'cheese sticks',
    entree: 'chicken parm',
    dessert: 'ice cream',
    drink: 'Coke',
};
let { dessert } = meal;
// console.log(dessert);
let { entree, appetizer } = meal;
// console.log(entree);
// console.log(appetizer);
const { drink: sweetness } = meal;
// const sweetness = meal.drink;
// console.log(meal.drink);
// console.log(sweetness);
const { appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink } = meal;
// console.log(myAppetizer);
// console.log(myEntree);
// console.log(myDrink);
// console.log(myDessert);
for (let objectKey in person) {
    // console.log(`${objectKey} : ${person[objectKey]}`);
}


// Creating a Class:
class Car {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = 0;
    }

    drive(mileToDrive) {
        this.mileage += mileToDrive; 
    }
}

let car1 = new Car('', '', '', '');

let govCar = new Car('Ford', 'Explorer', 2021, 'White');

console.log(govCar);
console.log(govCar.color); // White


// Creating a subclass:
class Working extends Car {
    constructor(make, model, year, color) {
        super(make, model, year, color)
         
        this.passengerCount = 5;
    }
}

let lyftCar = new Working('Tesla', 'Model 3', 2023, 'Matte Black', 'Electric');
console.log(lyftCar.make); // Tesla


////////////////////////////////////////////////////


let teams = {
    teamOne: ['ryan', 'alex', 'wyatt', 'tj', 'vinson'],
    teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
    teamThree: ['porter', 'blake', 'june', 'owen'],
    teamFour: ['brian', 'riley', 'ezra', 'jordan'],
    teamFive: ['grey', 'milo', 'mckay', 'leo'],
};
// console.log(teams);
delete teams.teamFour;
// console.log(teams);
class Auto {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.miles = 0;
    }
    drive(milesToDrive){
        this.miles += milesToDrive;
    }
}
class Sedan extends Auto {
    constructor(make, model, year, color, type){
        super(make, model, year, color)
        this.type = type;
        this.passengerCount = 5;
    }
}
let vinsonsCar = new Sedan('Tesla', 'model 3', '2025', 'Matte Black', 'Electric');
vinsonsCar.drive(100)
console.log(vinsonsCar);
let chasesCar  = new Auto('Pontiac', 'GrandPrix', 1998, 'red');
let ashleysCar = new Auto('Music', 'mp3', 2001, 'blue')
console.log(chasesCar);
console.log(ashleysCar);
chasesCar.drive(50)
console.log(chasesCar);
