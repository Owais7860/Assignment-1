let alien_color : string = "green";

switch (alien_color) {
    case "red" :
        console.log("Congratulation, you've earned 5 poitns");
        break;
    case "green":
    console.log("Congratulaion, you've earned 15 points");
        break;
    case "yellow":
        console.log("Congratulation, you've earned 10 points");
    default:
        console.log("Invalid alien color detected")
}