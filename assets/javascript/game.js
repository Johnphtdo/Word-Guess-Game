// Create an array of words to be used
var flavors = ["vanilla","chocolate","strawberry","cookies and cream","pistachio","mint chocolate chip"]

// Computer should choose words randomly
var computerFlavor = flavors[Math.floor(Math.random() * flavors.length)];

// Starting #'s for variables
var wins = 0;
var guesses = 10;
var underscores = []
console.log(computerFlavor);
// Generate right amount of underscores for the words and display on html

var newUnderscores = function() {

    for(i = 0; i < computerFlavor.length; i++) {

    underscores.push("_");
    }
    return underscores;
}
console.log(newUnderscores())

// Get the users key input by event
document.onkeyup = function(event) {};

// based on event if and else statements to show correct or wrong answers


