let guestList: string[] = ["Areeb", "Bassam", "Haseeb", "Ahmed"];

// Inform that only two people can be invited for dinner
console.log("Unfortunately, the new dinner table won't arrive in time, so I can only invite two people for dinner.");

// Remove guests until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop(); // Remove the last guest
    console.log("Sorry " + removedGuest + ", I can't invite you to dinner at this time.");
}

// Print invitation messages for the remaining two guests
console.log("Hey dear " + guestList[0] + ", you're still invited to dinner.");
console.log("Hey dear " + guestList[1] + ", you're still invited to dinner.");

console.log("Total number of people inviting to dinner " + guestList.length);
