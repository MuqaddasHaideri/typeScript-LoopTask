//Counter Incrementer (Using do while loop )

//Create a variable counter and initialize it to 0.
let counter: number = 0;

//Define a variable step to hold the value by which the counter will be incremented.
let step: number = 10;


//In the loop, print the counter to the console and increment it by
//the step amount each iteration.

do {
    console.log(counter);
    counter += step;
} while (counter <= 100);

console.log(counter);