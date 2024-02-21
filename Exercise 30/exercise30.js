var current_users = ["Areeb", "Ahmed", "Haseeb", "Owais", "Sameer"];
var new_users = ["Abdul", "farhan", "Ahmed", "Moiz", "Sameer"];
var current_users_lower = current_users.map(function (user) { return user.toLocaleLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var new_user_lower = new_user.toLowerCase();
    if (current_users_lower.includes(new_user_lower)) {
        console.log("Sorry the username \"".concat(new_user, "\", is already taken. Please choose a new name"));
    }
    else {
        console.log("Congratulation, the username \"".concat(new_user, " is available\""));
    }
}
