// variables declaration 

var location1 = randomloc;
var location2 = location1 + 1;
var location3 = location2 + 1;

let guess; 
let hits = 0;
let guesses = 0;

let isSunk = false ; 

// game logic

// While loop starting point 
while (isSunk == false) {
    guess = prompt("Ready to Shoot‼️🔫 (Enter number 0-6)");
    // (|| = or)
    if (guess <0 || guess >6 ){
        alert("Please enter a valid number!")
    } 
    else{
        guesses += 1;

        if(guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("Hit‼️💥")

            if (hits == 3) {
                isSunk = true;
                alert("Battleship Sank‼️⚓")
            }
        }
        else{
            alert("Miss‼️😆")

        }
    }
}

// end of the loop

var stats = "You Sank the Battleship at: " + guesses + "guesses " + "with the accuracy of: " + (3 / guesses);

alert(stats);

//ON GOING
//var accuracy;
    //if (guesses = 0)
        //accuracy
//= (guesses > 0 ? (hits/guesses) *100 : 0).toFixed(2);

var stats ="Took" + guesses + "guesses to sink the Battleship!🙌" + "\n" + "with the accuracy of: " + accuracy + "%";

alert(stats);