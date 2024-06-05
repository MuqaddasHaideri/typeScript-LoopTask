//5.Exploring Arrays with Loops(Using loop )

//Define an empty array called myArray.
let myArray: string[] = [];

//Use a for loop to iterate 10 times.
for(let i=1;i<=10;i++){
//In each iteration, add a new incrementing value (starting from 1) to the myArray.
let value="Element no "+i;
    myArray.push(value);
}
//After populating the array, log the myArray into the console.
console.log(myArray);

//Use a for loop to iterate through the array elements.
for(let j=1;j<10;j++){
//Adjust the number of iterations based on the number of values in the array.
//Output each array element along with its index into the console.
console.log("index ["+ j +"] has value "+myArray[j]);
}

//Use a for...of loop to iterate through the array elements.
for(const value of myArray){
    console.log(value)
}

