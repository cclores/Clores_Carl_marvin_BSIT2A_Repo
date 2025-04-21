// variables declaration 

var randomLoc = Math.floor(Math.random() * 5);
var shipLoc = [randomLoc, randomLoc + 1, randomLoc + 2];

let guess; 
let hits = 0;
let guesses = 0;
let isSunk = false ; 

// game logic

// While loop starting point 
while (!isSunk) {
    guess = prompt("Ready to Shoot‼️🔫 (Enter number 0-6)");

    if (guess === null){
        alert("Thank You for Playing‼️😀");
        break;
    }

    guess = parseInt(guess, 10);
    // Converting input to a number base 10

if (isNaN(guess) || guess < 0 || guess > 0) {
    alert("Please enter a number only from 0 to 6😢");
    continue;
    // Skip the code
}

guesses++;

const hitIndex = shipLoc.indexOf(guess);

if (hitIndex !== -1) {
    alert("Hit‼️💥");
    shipLoc.splice(hitIndex, 1);
    hits++;
    if (shipLoc.length === 0) {
        isSunk =  true;
    }
}
else {
    alert("Miss‼️😆")
} // end of the loop
}

var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0 ).toFixed(2);
var stats ="Took" + guesses + "guesses to sink the Battleship!🙌" + "\n" + "with the accuracy of: " + accuracy + "%";

alert(stats);