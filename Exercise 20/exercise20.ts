let car1: { make: string, model: string, year: number} = {
    make: "Toyota",
    model: "camry",
    year: 2020,
};

let car2: { make: string, model: string, year: number} = {
    make: "honda",
    model: "CD 125",
    year: 2024,
};

// error find in model because it's a string
let car3: { make: string, model: number, year: number} = {
    make: "superstar",
    model: "CD 70",
    year: 2021,
}; // Now if we need to run this code to our terminal so we had to comment this section

// Corrected the error: model should be a string
let car3: { make: string, model: string, year: number} = {
    make: "superstar",
    model: "CD 70",
    year: 2021,
};



console.log("Car 1. ");
console.log(car1);

console.log("Car 2. ");
console.log(car2);

console.log("Car 3. ");
console.log(car3);