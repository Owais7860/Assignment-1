function store_car_info(manufacturer, model_name) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    return {
        manufacturer: manufacturer,
        model_name: model_name,
        options: options
    };
}
var car1 = store_car_info("Toyota", "Corolla", "Red", "Leather Seats", "Sunroof");
var car2 = store_car_info("Honda", "Civic", "Blue");
console.log("Car 1:");
console.log(car1);
console.log("\nCar 2:");
console.log(car2);
