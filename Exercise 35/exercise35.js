function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("Creating a ".concat(size, " shirt with the message ").concat(message));
}
// call the function
make_shirt();
make_shirt("medium", "i love python");
make_shirt("small", "i love html");
