let guestlist : string[] = ["Areeb", "Bassam", "Haseeb", "Ahmed"];

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