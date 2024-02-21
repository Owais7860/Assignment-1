function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
}

console.log("Order 1:");
make_sandwich("Ham", "Cheese", "Lettuce");

console.log("\nOrder 2:");
make_sandwich("Turkey", "Swiss");

console.log("\nOrder 3:");
make_sandwich("Peanut Butter", "Jelly");
