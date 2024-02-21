function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(magician + " the Great");
    }
    return great_magicians;
}

function show_magician(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Dynamo"];
let great_magicians: string[] = make_great([...magicians]); // Creating a copy of the array

console.log("Original magicians:");
show_magician(magicians);

console.log("\nMagicians after adding the great:");
show_magician(great_magicians);
