// Create an array of words to be used
var flavors = ["vanilla","chocolate","strawberry","pistachio",]

// Computer should choose words randomly
var computerFlavor = flavors[Math.floor(Math.random() * flavors.length)];

// Starting #'s for variables
var wins = 0;
var losses = 0;
var guesses = 10;
var underscores = []
var lettersGuess =[]
var wrongGuess =[]

console.log(computerFlavor);
// Generate right amount of underscores for the words and display on html

var newUnderscores = function() {

    for(i = 0; i < computerFlavor.length; i++) {

    underscores.push("_");
    document.getElementById('wordToGuess').innerHTML = underscores.join(" ");
    }
    return underscores;
}
console.log(newUnderscores())


// Get the users key input by event
document.onkeyup = function(event) {
    document.getElementById("lettersUsed").innerHTML = "Wrong guesses: " + wrongGuess
    document.getElementById("winsTotal").innerHTML = "Wins: " + wins;
    document.getElementById("lossesTotal").innerHTML ="Losses: " + losses;

var userGuess = event.key;
// based on event if and else statements to show correct or wrong answers
if (computerFlavor.indexOf(userGuess) > -1){
    lettersGuess.push(userGuess)
    underscores[computerFlavor.indexOf(userGuess)] = userGuess
    document.getElementById('wordToGuess').innerHTML = underscores.join(" ");
    
    if (underscores.join("") === computerFlavor) {

        wins++
    }
    console.log(lettersGuess)
;}
else {
    wrongGuess.push(userGuess)
    console.log(wrongGuess)
}
}

// function reset() {
//     var guesses = 10;
//     var underscores = []
//     var lettersGuess = []
//     var wrongGuess = []
//     // Computer should choose words randomly
//     var computerFlavor = flavors[Math.floor(Math.random() * flavors.length)];

//     // Generate right amount of underscores for the words and display on html
//     var newUnderscores = function () {

//         for (i = 0; i < computerFlavor.length; i++) {

//             underscores.push("_");
//             document.getElementById('wordToGuess').innerHTML = underscores.join(" ");
//         }
//         return underscores;
//     }
//     console.log(computerFlavor)
//     console.log(newUnderscores())
//     startGame()
// }

// function startGame() {
//     var guesses = 10;
//     var underscores = []
//     var lettersGuess = []
//     var wrongGuess = []
//     // Computer should choose words randomly
//     var computerFlavor = flavors[Math.floor(Math.random() * flavors.length)];

//     // Generate right amount of underscores for the words and display on html
//     var newUnderscores = function () {

//         for (i = 0; i < computerFlavor.length; i++) {

//             underscores.push("_");
//             document.getElementById('wordToGuess').innerHTML = underscores.join(" ");
//         }
//         return underscores;
//     }
//         document.getElementById("lettersUsed").innerHTML = "Wrong guesses: " + wrongGuess
//         document.getElementById("winsTotal").innerHTML = "Wins: " + wins;
//         document.getElementById("lossesTotal").innerHTML ="Losses: " + losses;

//     console.log(computerFlavor)
//     console.log(newUnderscores())
// }

// function compare(userKey) {

//     if(computerFlavor.indexOf(userKey) > -1)
//     {
//         for(var i = 0; i < computerFlavor.length; i++){

//             if(computerFlavor[i] === userKey){

//                 document.getElementById('wordToGuess').innerHTML = underscores.join(" ");
//             }
//         }
//         console.log(underscores)


//     }


// }



