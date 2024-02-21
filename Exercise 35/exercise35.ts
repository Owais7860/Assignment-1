function make_shirt(size: string = "large", message : string = "I love typescript"): void{
    console.log(`Creating a ${size} shirt with the message ${message}`)
}

// call the function
make_shirt();

make_shirt("medium", "i love python");

make_shirt("small", "i love html");