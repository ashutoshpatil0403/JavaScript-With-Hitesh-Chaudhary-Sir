let today_date=new Date()
console.log(today_date)  // 2024-08-10T12:55:43.840Z
console.log(today_date.toString()) 
 // Sat Aug 10 2024 18:25:43 GMT+0530 (India Standard Time)
console.log(today_date.toISOString())  // 2024-08-10T12:55:43.840Z
console.log(today_date.toJSON())  // 2024-08-10T12:55:43.840Z
console.log(today_date.toLocaleString())  // 10/8/2024, 6:25:43 pm
console.log(today_date.toDateString())  // Sat Aug 10 2024

console.log(typeof today_date) // object

let MyCreatedDate= new Date(2000,2,4)
console.log(myCreatedDate)
console.log(myCreatedDate.toLocaleString())
console.log(myCreatedDate.toDateString())
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",  
})