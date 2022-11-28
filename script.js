function Car(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
    this.getCarInfo = function() {
        document.write(this.make + this.model + " released in " + this.year)
    }
}
let justTesla = new Car("Tesla ", "Model S ", 2015);
justTesla.getCarInfo();


function Person(name, age, cars) {
    this.name = name
    this.age = age
    this.cars = cars
    this.hasCar = function(car) {
        document.write(this.cars + car.model + "released in " + car.year)
    }
    this.info = function () {
        document.write(this.name + " is " + this.age + " has car ")
    }
}
let tom = new Person("Tom ", 24, "Tesla")
tom.info();

let tesla = new Car("Tesla ", "Model S ", 2015);
tom.hasCar(tesla);

