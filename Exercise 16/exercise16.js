var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placetovisit = ["Saudi arabia", "turkey", "japan", "Maxico", "Portugal"];
// console.log("Original order:" );
console.log(placetovisit);
console.log("\nAlphabetical order:");
console.log(__spreadArray([], placetovisit, true).sort());
console.log("\nOriginal order (unchanged):");
console.log(placetovisit);
console.log("\nreverse alphabetical order:");
console.log(__spreadArray([], placetovisit, true).sort().reverse());
console.log("\nOriginal order (unchanged):");
console.log(placetovisit);
placetovisit.reverse();
console.log("\nOriginal order restored:");
console.log(placetovisit);
placetovisit.sort();
console.log("\nSorted in alphabetical order:");
console.log(placetovisit);
placetovisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nSorted in reverse alphabetical order");
console.log(placetovisit);
