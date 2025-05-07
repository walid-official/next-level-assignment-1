{
    // Problem 1
    function formatString(input: string, toUpper?: boolean): string {
        if(!toUpper){
           return `${input.toLowerCase()}`
        }
        return `${input.toUpperCase()}`
    }
    // problem 2
    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        const item =  items.filter(item => item.rating >= 4)
         return item;
     }
    // problem 3
    function concatenateArrays<T>(...arrays: T[][]):T[] {
        const mergedArray = arrays.reduce((acc, curr) => acc.concat(curr), []);
        return mergedArray
    }
    // problem 4
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
        private model: string;
        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
        }
        getModel() {
            return `Model: ${this.model}`;
        }
    }    
    // problem 5
    function processValue(value: string | number): number {
        if(typeof value === "string"){
            return value.length
        }
        else if(typeof value === "number"){
            return value * 2
        }
        return value;
    }
    // problem 6
    interface Product {
        name: string;
        price: number;
    }    
    function getMostExpensiveProduct(products: Product[]): Product | null {
        if(products.length > 0){
            const  mostExpensiveProduct = products.find(product => product.price === Math.max(...products.map(product => product.price)));
            return mostExpensiveProduct || null;
        }
        return null;
      }
    // problem 7
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }
      
      function getDayType(day: Day): string {
        if(day === Day.Saturday || day === Day.Sunday){
            return "Weekend"
        }
        return "Weekday"
      }
    // problem 8
    async function squareAsync(n: number): Promise<number> {
        let promise = new Promise<number>((resolve, reject) => {
            if(n >= 0){
                setTimeout(() => {
                    resolve(n * n);
                }, 1000);
            }
            else{
                reject("Error: Negative number not allowed")
            }
        });
        return promise; 
    }
}