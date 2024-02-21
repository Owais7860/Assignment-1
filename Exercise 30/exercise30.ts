let current_users : string[] =["Areeb","Ahmed", "Haseeb", "Owais", "Sameer"];
let new_users : string[] = ["Abdul", "farhan", "Ahmed", "Moiz", "Sameer"];

let current_users_lower: string []= current_users.map(user => user.toLocaleLowerCase());

for(let new_user of new_users) {
    let new_user_lower = new_user.toLowerCase();
    if (current_users_lower.includes(new_user_lower)) {
        console.log(`Sorry the username "${new_user}", is already taken. Please choose a new name`);
     } else {
        console.log(`Congratulation, the username "${new_user} is available"`);
     } 
}