// بسم اللہ

// chapter 69 object..

/* object aik asi cheez ha jisme multiple value hoti hai
jaise real life ma , insaan -> name , age , city */

// var arr = ["a","b",2,true]
// console.log(arr);

// var stdata = ["ali",10,20,"male"]

// console.log(stdata[3]);


// var stdata = '{"roll": 10, "age": 20, "gender": "male", "name": "saad","city": "karachi" }';
// console.log(stdata)['gender'];
// console.log(stdata['age']);

/* now every have key (10 have key called roll (value)) */


// var person = {name: "Altaf" , gender: "male", city: "karachi", age: "20" };
// console.log(person);





// var sdata = {
//     'name': "Ali",
//     "age": 20,
//     "subjact": ["math","computer","physics","urdu"], 
//     "bio": function(){
//         console.log("hi i am inside object");
        
//     },

//     "car": {
//         name: "honda",
//           cc: 760,
//            fuelAverage: {low:200, high:[300,400]}}

// }
// console.log(sdata["name"]);
// console.log(sdata.subjact[0]);
// console.log(sdata.bio);
// console.log(sdata.car["name"]);
// console.log(sdata.car.cc);
// console.log(sdata.car.fuelAverage.high[0]);



 
// var obj = new Object(); // object constructor

// obj.name = "altaf";
// obj.age = 20;
// obj.subjects = "math", "physice","computer"
// console.table(obj.subjects);




// chapter 70 object properties....

/* object ki andar jo value hoti ha usay property kehtay hai */

// var obj ={
//     name:"ali",
//     age:30

// }
// obj.roll = 10
// // delete obj.name
// console.log("name" in obj); // boolean





// var obj ={
//     name:"ali",
//     age:30

// }
// obj.roll = 10
// console.log("name" in obj); // boolean

// for(var abc in obj){
//     console.log("keys=>",abc,obj[abc]);
    
// }

// console.log(obj);




// var obj ={
//     name: "noor",
//     age: 20
// }

// obj.roll = 10
// console.log("name" in  obj);

// for(var abc in obj){

// }

// in operater check karta ha property object ka ander exist karti ha ya nhi 

// js ma object dynamic hoti ha baad me bhi prorprty add kar sakta ha

// var obj ={
//     name:"ali",
//     age:30

// }
// obj.roll = 10
// obj.bio = {}
// console.log(obj);

// console.log("name" in obj); // boolean




// chapter 72..object Methods...

/* object ke ander jo function hoti hai usay method kehtay hai */

// var person = {
//     name: "Ali",
//     age: 25,
    
//     greet: function(){
//         console.log("hello");
        
//     }
// };



// var person = {
//     name: "Ali",

//     sayName: function(){
//         console.log(this.name);
        
//     }
// };

// person.sayName();



// this, jis object ne function ko call kiya ha
/* object ka andar jo function hoti ha usko method kehte ha */

// chapter 72 Object constructors...





// function enter (){
//     var p = document.getElementById("input")
//     console.log("p=>",p)
//     p.style.backgroundColor = "red";
//     p.style.fontSize = 20
    
// }



// var stdata = 