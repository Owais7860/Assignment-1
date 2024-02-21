let placetovisit : string[] = ["Saudi arabia", "turkey", "japan", "Maxico", "Portugal"];

console.log("Original order:" );
console.log(placetovisit);

console.log("\nAlphabetical order:"); 
console.log([...placetovisit].sort());

console.log("\nOriginal order (unchanged):");
console.log(placetovisit);

console.log("\nreverse alphabetical order:");
console.log([...placetovisit].sort().reverse());

console.log("\nOriginal order (unchanged):");
console.log(placetovisit);

placetovisit.reverse();
console.log("\nOriginal order restored:");
console.log(placetovisit);

placetovisit.sort();
console.log("\nSorted in alphabetical order:");
console.log(placetovisit);

placetovisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order");
console.log(placetovisit);
