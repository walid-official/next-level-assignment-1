// class Vehicle  {
//     // private make: string;
//     constructor( private make: string,  public year: number) {}
// }

class Vehicle  {
    private make: string;
    year: number;
    constructor(  make: string,   year: number) {
        this.make = make;
        this.year = year;
    }
    getInfo(){
        return `make: ${this.make}, year: ${this.year}`
    }
}
class Car extends Vehicle {
    model: string;
    constructor(make: string,year: number, model: string){
        super(make, year);
        this.model = model;
    }
    getModel(){
        return `Model: ${this.model}`
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
myCar.getModel();  // Output: "Model: Corolla"

console.log(myCar);
console.log(myCar.getInfo());
console.log(myCar.getModel());