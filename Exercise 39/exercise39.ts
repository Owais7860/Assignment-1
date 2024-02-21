let magicians : string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Dynamo"];

function show_magicians(magicians: string[]): void{
    for (let magician of magicians)
    console.log(magician);
}

console.log("List of magicians;");
show_magicians(magicians);