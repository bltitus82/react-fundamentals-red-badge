class User {
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

let userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first);
console.log(userOne.f);
console.log(userOne.l);
console.log(userOne);


class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

let truck = new Car("Ram", "1500 Classic", "2019");
console.log(truck.make);
console.log(truck.model);
console.log(truck.year);

let heidisCar = new Car("Kia", "Cadenza", "2017");
console.log(heidisCar);