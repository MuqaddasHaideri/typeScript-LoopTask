//1. Creating a Lesson Plan(Using for loop )

//Start by setting up an empty array named myWork that will hold objects.
let myWork: { name: string, status: boolean }[] = [];

//lessons: Write a for loop that runs from 1 to 10. In each iteration:
for (let i=1;i<10;i++){
    let lessonNo :string =" Lesson = "+i;
    let terOperator= i%2==1 ? true :false
//Create an object representing a lesson.
let lesson={
    name : lessonNo,
    status:terOperator

}
//Push each lesson object into the myWork array.
myWork.push(lesson);

}
//Finally, log the myWork array to the console to see the list of lessons.
console.log(myWork);
