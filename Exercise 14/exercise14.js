var guestlist = ["Areeb", "Bassam", "Haseeb", "Ahmed"];
// initial invitation message
console.log("Initial invitation messages");
console.log("---------------------------");
console.log("Hey dear " + guestlist[0] + "\n\t i would like to invite you to dinner at my place.");
console.log("Hey dear " + guestlist[1] + "\n\t I would like to invite you to dinner at my place.");
console.log("Hey dear " + guestlist[2] + "\n\t I would like to invite you to dinner at my place.");
console.log("Hey dear " + guestlist[3] + "\n\t I would like to invite you to dinner at my place.");
console.log("");
console.log(guestlist[1] + " can't make it to the dinner.");
// now modify the guest list 
guestlist[1] = "Aliyan";
// updated invitation messages
console.log("---------------------------");
console.log("Hey dear " + guestlist[0] + "\n\t i would like to invite you to dinner at my place.");
console.log("Hey dear " + guestlist[1] + "\n\t I would like to invite you to dinner at my place.");
console.log("Hey dear " + guestlist[2] + "\n\t I would like to invite you to dinner at my place.");
console.log("Hey dear " + guestlist[3] + "\n\t I would like to invite you to dinner at my place.");
console.log("Hello Good news, i found a bigger dinner table. ");
// Add new guest
guestlist.unshift("Wassay"); // to the beginning
guestlist.splice(2, 0, "Sameer"); // to the middle
guestlist.push("Taha"); // to the end
console.log("------------------------");
console.log("Final invitation message");
console.log("------------------------");
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("Hey dear " + guest + "\n\t i would like to invite you to dinner at my place.");
}
