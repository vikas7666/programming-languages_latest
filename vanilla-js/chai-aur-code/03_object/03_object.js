const course = {
    coursename : 'js in hindi',
    price  : '999',
    courseInstructor  : 'hitesh'
}

// console.log(course.courseInstructor);

//Object de-structure  

/* Why we are using object de-structure 
    suppose we ant to access courseInstructor then every time we write course.courseInstructor
    this is not good  way we can do better way
*/
// 1st way without variable 
const { courseInstructor} = course;
console.log("courseInstructor",courseInstructor)  // courseInstructor hitesh

// 2nd way with variable
const { courseInstructor: instructor} = course;
console.log("instructor", instructor)  // courseInstructor hitesh