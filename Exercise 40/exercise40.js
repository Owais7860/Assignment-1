function show_magician(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push(magician + " the great");
    }
    return great_magicians;
}
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Dynamo"];
console.log("Original magicians: ");
show_magician(magicians);
var great_magicians = make_great(magicians);
console.log("\n Magicians after adding the great;");
show_magician(great_magicians);
