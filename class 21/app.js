// var obj = {
//     name: "ali",
//     roll: 20,
//     age: 10,
// };
// console.log(obj);



// var obj2 = {}
// obj2.userName = "Altfa"
// console.log("obj2=>",obj2);


// var obj = {
//     name: "ali",
//     roll: 20,
//     age: 10,
// };


// var obj2 = {}
// obj2["userName"] = "altaf"
// obj2["fullName"] = "Malik"
// // console.log("obj2=>",obj2);
// console.table(obj2);



    


// var obj = {
//     name:"ali",
//     age: 20,
//     speed: function (){
//         // alert("hello alatf")
//         console.log("this is function");
        
//     }
// }
// console.log(obj.speed());



// var obj = {
//     name:"ali ",
//     age: 20,
//     speed: function (){
//         // alert("hello alatf")
//       return  console.log(`my name is ${this.name }and my age is ${this.age}`);
        
//     }
// }
// console.log(obj.speed());



// var obj = {
//     name: "malik",
//     age: 18,
//     speed: () =>{
//      return   console.log(`my name is ${this.name} and my age is ${this.age}`);
        
//     }
// }

// console.log(obj.speed());

// obj.speed();



// var obj ={
//     name:"noor",
//     age: 20 
// }

// var test = obj;
// console.log(obj.age);




// function Student(name, age , roll){
// this.name = name
// this.age = age
// this.roll = roll
// }

// var student1 = new Student("ali", 30, 20)
// console.log(student1);


// constructor funciton
// ye ek normal function ha lekin hum isko new ka sath use karte ha to ye construction ban jata ha hai
// jab new lagta ha jo js ma ek naya empty object se connect karta ha 
// this.name = name object me value daal deta hai object ko return kar deta ha
// constructor function ka naam capital letter se likhte ha 



// var obj = {
//     name:" ali",
//     roll:20,
// }
// obj.funct = function(){
//     return ("inside function" + this.name).toUpperCase();   
// }
// console.log(obj.funct());


// this
// this us object ko point karta hai jo function ko call kar rha hota hai
// this us naya object ko point kar ta ha


// var fruits = {banana: 300 ,orange: 200 , apple: 500};
// var text = "";
// for(var [fruits, value] of Object.entries(fruits)){
//     text += fruits + ": " + value + "<br>" ;
//     console.log(text);
    
// }


// var obj  = {
//     name: "ali",
//     getname: function(){
//         console.log(this);
        
//     }
// }

// var a = obj.getname
// a()



// function Student(){
//     this.name = "ali"
//     this.roll = 123
//     this.age = 20
// }
// // console.log(window);

// console.log(new Student());


// function Student(name,email,phone){
//     this.name = name;
//     this.email = email;
//     this.phone = phone;
// }
// console.log(new Student("ali" , "abc@gmail.com", 13156123));

// var arr = [
//     new Student("ali" , "abc@gmail.com", 13156123),
//        new Student("noor" , "abc@gmail.com", 13156123),   
//            new Student("hussain" , "abc@gmail.com", 13156123),
//                new Student("hamza" , "abc@gmail.com", 13156123),
//                    new Student("aman" , "abc@gmail.com", 13156123),
//                        new Student("wadood" , "abc@gmail.com", 13156145454523),

// ]
// console.log(arr);
