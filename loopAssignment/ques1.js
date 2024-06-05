//1. Creating a Lesson Plan(Using for loop )
//Start by setting up an empty array named myWork that will hold objects.
var myWork = [];
//lessons: Write a for loop that runs from 1 to 10. In each iteration:
for (var i = 1; i < 10; i++) {
    var lessonNo = " Lesson = " + i;
    var terOperator = i % 2 == 1 ? true : false;
    //Create an object representing a lesson.
    var lesson = {
        name: lessonNo,
        status: terOperator
    };
    //Push each lesson object into the myWork array.
    myWork.push(lesson);
}
//Finally, log the myWork array to the console to see the list of lessons.
console.log(myWork);
