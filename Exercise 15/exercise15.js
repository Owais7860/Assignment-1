var guestlist = ["Areeb", "Bassam", "Haseeb", "Ahmed", "Wassay", "Sameer", "Taha"];
console.log("Unfortunately, the new dinner table won't arrive in time, so I can only invite two people for dinner.");
while (guestlist.length > 2) {
    var removeguest = guestlist.pop();
    console.log("Sorry " + removeguest + "i can't invite you to dinner at this time.");
}
console.log(guestlist[0] + " you're still invited to dinner. ");
console.log(guestlist[1] + " you're still invited to dinner. ");
guestlist.pop();
guestlist.pop();
console.log("final guest list ", guestlist);
