let animals : string[] = ["Tiger", "Elephant", "Panda"]

console.log("Name of animals");
for (let animal of animals) {
    console.log(animal)
}

console.log("\n Statement of animals")
for (let animal of animals) {
    switch (animal) {
        case "Tiger" :
            console.log(`A ${animal}, is a fierce predator`) 
            break;
            case "Elephant":
                console.log(`A ${animal}, is the largest land animal`)
                break;
                case "Panda":
                    console.log(`A ${animal}, is known for it's cute appearance`)
    }
}