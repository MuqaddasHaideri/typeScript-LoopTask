//Create a variable to store the maximum value for the number guessing game.
let maximumValue = 1000;

//Use Math.random() and Math.floor() to generate a random number between 1 and the maximum value. Log this value to the console for development purposes.
const randomNumber: number = Math.floor(Math.random() * maximumValue) + 1;
console.log("Random number : "+randomNumber);

//Create a variable to track whether the user's guess is correct. Set it to false initially.
let userGuess: boolean = false;

//Use an array to store a series of predefined guesses.
const guessNumbers: number[] = [754, 543, 3435, 320, 500,987,657, randomNumber];

//Use a while loop to iterate over the predefined guesses until the correct guess is made.
let index: number = 0;

while (!userGuess && index < guessNumbers.length) {
    const currentGuess: number = guessNumbers[index];

//Inside the loop, check if the current guess matches the random number. Provide feedback if the guess is too high or too low.
if (currentGuess === randomNumber) {
    console.log("Correct! The random number is" +currentGuess);
    userGuess = true;
} else if (currentGuess < randomNumber) {
    console.log("Guess "+currentGuess+" is too low.");
} else {
    console.log("Guess "+currentGuess+" is too high.");
}

index++;
}

if (userGuess) {
console.log("No guess is correct!.");
}