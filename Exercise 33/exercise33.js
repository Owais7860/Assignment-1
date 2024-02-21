var animals = ["Tiger", "Elephant", "Panda"];
console.log("Name of animals");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
console.log("\n Statement of animals");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    switch (animal) {
        case "Tiger":
            console.log("A ".concat(animal, ", is a fierce predator"));
            break;
        case "Elephant":
            console.log("A ".concat(animal, ", is the largest land animal"));
            break;
        case "Panda":
            console.log("A ".concat(animal, ", is known for it's cute appearance"));
    }
}
