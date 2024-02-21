function store_car_info(manufacturer: string, model_name: string, ...options: string[]): { manufacturer: string, model_name: string, options: string[] } {
    return {
        manufacturer: manufacturer,
        model_name: model_name,
        options: options
    };
}

const car1 = store_car_info("Toyota", "Corolla", "Red", "Leather Seats", "Sunroof");
const car2 = store_car_info("Honda", "Civic", "Blue");

console.log("Car 1:");
console.log(car1);

console.log("\nCar 2:");
console.log(car2);
