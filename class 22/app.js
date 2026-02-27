// js ma object ek  aisi cheez hai jisme hum data ko key + value ki from me store karte hai

// var student = {
//     name: "ali",
//     age: 20,
//     roll: 500,
// }
// console.log(student);
// console.log(student.roll);

// Note;
// object ke ander sirf .properties (name:value) .ya methods (function) allowed hote hai
// is ma console likna allowed nhi hoti hai

// var student = {
//     name: "Ali",
//     age: 20,
//     roll: 500,

// }
// console.log(student["age"]);
// console.log(student.age);


// 1 student.age
// ya Do Notation tab use hoti hai jab property ka name fixed ho


// 2 student["age"]
// Bracket Notation
// tab use hoti hai jab property ka name dynamic ho ya variable ke through lena ho


// // Add a New property .............................................................................

// var student = {
//     name:"noor",
//     age: 20,
//     roll: 556
// }
// student.class = "12th"
// student.school = "abc school"
// console.log(student);


// Delete a property.................................................................................

// var student = {
//     name: "noor",
//     age:20,
//     roll: 123,
// }
// delete student.roll
// console.log(student);


// object me function method...........................................................................

// var person = {
//     name: "noor",
//     greet: function(){
// return "hello " + this.name;
//     }
// };
// console.log(person.greet());



// this.name ka matlab hai current object ka name

/* (person)=> ek object hai  (name)=> property ha (greet)=. method ha jo function jo object ke ander ho */



// Constructor Function se object banana................................................................


// function student(name,age){  // template hai object banane ka laye
// this.name = name
// this.age = age
// }
// var sdata = new student("ali",20)
// console.log(sdata);

// last 2 line 
/* (new kayword 4 kam karta ha)
1, naya empty object banata hai
2,this ko us object se bind karta hai
3,constructot function chalata hai
4, object return karta hai */