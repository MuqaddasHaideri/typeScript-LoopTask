//4.Exploring Objects with for...in Loop
//Define an object called myObject with three properties: item1, item2, and item3,
//each with corresponding string values.
var myObject = {
    item1: "bag",
    item2: "Mobile",
    item3: "laptop",
};
//Iterate through the properties of myObject using a for...in loop.
for (var property in myObject) {
    //Inside the loop, print each property's name and its corresponding value to the console.
    console.log(property + " : " + myObject[property]);
}
