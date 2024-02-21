let color = "blue";

console.log("is the color `blue`? i predict true.");
console.log(color == "blue");
console.log("is the color isn't red? right.");
console.log(color == "blue");


console.log("============================================")



let number = 20

console.log("is the number equal to 10? am i right.");
console.log(number == 10);
console.log("so the number is equal to 20");
console.log(number == 20);
if (number < 20) {
    console.log("small number");
} else {
    console.log("large number");
}


console.log("============================================")



let x = 7 ;
let y = 14;

console.log("is x greater than 4 and y is less than 14? i think this is right.");
console.log( x > 7 && y <= 14);
console.log("oh my fault x is less than 4 and y is greater than 10? right.");
console.log(x < 4 || y > 10);


console.log("============================================")


let fruits = ["Apple", "Mango", "Banana", "pineapple"];

console.log("is `Mango` in this fruit array? is this right.");
console.log(fruits.includes(`Mango`));
console.log("i think `Banana` is on this array? am i right,");
console.log(fruits.includes(`Banana`));

console.log("i think `orange` isn't in this fruit array. am i right?");
console.log(fruits.includes(`orange`));
console.log("i think `Banana` isn't in this fruit array. this is correct?");
console.log(!fruits.includes(`Banana`));

console.log("============================================")
