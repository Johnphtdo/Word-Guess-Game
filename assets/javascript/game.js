// Create an array of words to be used
const flavors = ["vanilla","chocolate","strawberry","pistachio",]
let computerFlavor = "";

// Starting #'s for variables
let wins = 0;
let losses = 0;
let guesses = 10;
let underscores = [];
let lettersGuess =[];


gameStart = () => {
    // Reset values on gameStart
    guesses = 10
    underscores = [];
    lettersGuess = [];
    wrongGuess = [];
    // On Game Start, computer picks a random word
    computerFlavor = flavors[Math.floor(Math.random() * flavors.length)];
    // After word is chosen, generate number of blanks
    for (let i = 0; i< computerFlavor.length; i++){
        underscores.push("_");
        document.getElementById("wordToGuess").innerHTML = underscores.join(" ");
    }
    // Displays for start up
    document.getElementById("lettersUsed").innerHTML = "Letters used: " + lettersGuess;
    document.getElementById("wrongGuesses").innerHTML = "Guesses Left: " + guesses;
    document.getElementById("winsTotal").innerHTML = "Wins: " + wins;
    document.getElementById("lossesTotal").innerHTML = "Losses: " + losses;

}
// Function to take onkey event and check if correct
checkLetter = (letter) =>{
    // default boolean to trigger for every instance a letter is present
    let correctlyGuessed = false
    for (let i = 0; i< computerFlavor.length; i++){
    if (letter === computerFlavor[i]){
        correctlyGuessed = true;
    }
}
    if(correctlyGuessed){
        for (let j = 0; j<computerFlavor.length; j++){
            if(computerFlavor[j] === letter){
                underscores[j] = letter
            }
        }
    }
    else {
        lettersGuess.push(letter);
        guesses--;
    }
   

}
roundCheck = () => {
    // If game isn't over, update all the fields
    document.getElementById("lettersUsed").innerHTML = "Letters used: " + lettersGuess;
    document.getElementById("wrongGuesses").innerHTML = "Guesses Left: " + guesses;
    document.getElementById("wordToGuess").innerHTML = underscores.join(" ");
    // Game is won when underscores on page matches with the word
    if(underscores.join("") === computerFlavor){
        wins++
        gameStart();
    }
    // Game is over when guesses reach 0
    else if(guesses === 0){
        losses++
        gameStart();
    }
}
// Initialze game
gameStart();

// event to run on event key
document.onkeyup = function(event){
    let letterGuessed = String.fromCharCode(event.which).toLowerCase();
    checkLetter(letterGuessed)
    roundCheck();
}