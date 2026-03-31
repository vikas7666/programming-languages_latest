let myDate  = new Date(); 

we have created date object and its instance

Date() is object and myDate is instance 
 
console.log(myDate)  // 2024-01-17T17:32:46.058Z

//converted into string 
 console.log(myDate.toString()) // Wed Jan 17 2024 17:38:52 GMT+0000 (Coordinated Universal Time)
 console.log(myDate.toDateString()); // Wed Jan 17 2024
 console.log(myDate.toISOString()); // 2024-01-17T17:40:48.308Z
 console.log(myDate.toLocaleDateString()); // 1/17/2024
 console.log(myDate.toLocaleTimeString()); // 5:42:13 PM
 console.log(myDate.toUTCString()); // Wed, 17 Jan 2024 17:42:45 GMT

 console.log(typeof myDate)  // Object
 
 let myCreatedate = new Date(2023, 0 , 17)
 console.log(myCreatedate);   // 2023-01-23T00:00:00.000Z

 let myCreatedate2 = new Date(2023, 0 , 17, 23, 20)
 console.log(myCreatedate2.toLocaleString()); // 1/17/2023, 11:20:00 PM

 let createDate3  =  new Date("2023-01-17");  // Format yyyy-mm-dd
 console.log(createDate3.toLocaleString());  // 1/17/2023, 12:00:00 AM

let createDate4  =  new Date("01-17-2023");   // 

 console.log(createDate4.toLocaleString());  //1/17/2023, 12:00:00 AM Format MM-dd-yyyy

 let timestamp  = Date.now();
 console.log(timestamp);  // 1705598010295 this time is coming form 1970 

 console.log(createDate4.getTime());  // 1673913600000 this time is came from defined date in millisecond

 console.log(Date.now());  // 1705598361498

 console.log(Math.floor(Date.now() / 1000));  // 1705598456


let newDate = new Date();

console.log(newDate.toLocaleDateString('default', {
    weekday : "long" // clr + spacebar // it will highlight connected method
}));

// Thursday we get current week days
