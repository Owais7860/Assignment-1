function show_magician(magicians: string[]): void{
    for (let magician of magicians) {
        console.log(magician)
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[]= [];
    for (let magician of magicians) {
        great_magicians.push(magician + " the great");
    }
   return great_magicians;
}

let magicians: string[]= ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Dynamo"];

console.log("Original magicians: ");
show_magician(magicians);

let great_magicians: string[]= make_great(magicians);

console.log("\n Magicians after adding the great;");
show_magician(great_magicians);