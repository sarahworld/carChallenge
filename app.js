class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return 'Beep.';

    }

    toString(){
        return `The Vehicle is a ${this.make + " " + this.model} from ${this.year}.`
    }
}

//// *********************PART ONE**********************************/////

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
console.log(myFirstVehicle.honk()); // "Beep."
console.log(myFirstVehicle.toString()); // "The vehicle is a Honda Monster Truck from 1999."

class Car extends Vehicle{
    constructor(make, model, year){
        
        super(make, model, year);
        this.numWheels = 4;
    }
    
}

//// *********************PART TWO**********************************/////

let myFirstCar = new Car("Toyota", "Corolla", 2005);
console.log(myFirstCar.numWheels);
console.log(myFirstCar.toString());
console.log(myFirstCar.honk());


class Motorcycle extends Vehicle{
    constructor(make, model, year){
        
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine(){
        return 'VROOM!!!';
    }
    
}
//// *********************PART THREE**********************************/////
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

console.log(myFirstMotorcycle.toString());
// "The vehicle is a Honda Nighthawk from 2000."

console.log(myFirstMotorcycle.honk());     // "Beep."
console.log(myFirstMotorcycle.revEngine()); // "VROOM!!!"
console.log(myFirstMotorcycle.numWheels);  // 2


class Garage{
    constructor(capacity){
        this.capacity = capacity
        this.vehicles = [];
    }

    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            return 'Only vehicles are allowed in here!'
        }
        if(this.vehicles.length >= this.capacity){
            return 'Sorry, we’re full.'
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!"
    }
}

let garage = new Garage(2);
console.log(garage.vehicles); // []
console.log(garage.add(new Car("Hyundai", "Elantra", 2015))); // "Vehicle added!"
console.log(garage.vehicles); // [Car]
console.log(garage.add("Taco")); // "Only vehicles are allowed in here!"

console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2000)));
// // "Vehicle added!"
console.log(garage.vehicles); // [Car, Motorcycle]

console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2001)));
// "Sorry, we're full."

