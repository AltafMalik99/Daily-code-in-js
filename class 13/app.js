// undefined 
// ka matlab hoti hai value di hi nhi ha
// variable declare kiya value assign nhi ki


// NAN 
// matlab hoti hai :Not a number
// yani ap number expect kar rha ho lekin calculation possible nhi ha
// NaN ka type number hota hai
/*tum number ki jagah ghalat value de dete ho
aur JS us ghalat value ko number me convert nahi kar pati */


// chapter 35 ...... function

/*jo kam bar bar karna ho us ko code se ek jagah likh deta hai
jab chaho use chala lo  */


// function sum (){
//     console.log("hello world!");
// }
// sum()


// function sum(a,b){  // paremeters
//     console.log(a+b);
// }
// sum()  //aurguments



// function sum(name){
//     console.log("hello" ,name);
// }
// sum("noor")
// sum("ali")

// function sum(a,b){
//     console.log(a+b);   
// }
// sum(2,2)
// sum(5,5)
// sum(15,5)


// function sum(a,b){
//     return a+b
// }
// var result= sum (5,5)
// console.log(result);


// function sum(a,b){
//       return a+b
// }
// console.log(sum(5,5));


// function banate waqt => parameters
// function call karte waqt => Arguments


// function sum (name,age){
//     console.log(name, "is " + age + " year old");
// }
// sum("Ali",20)



// function add(a, b) {
//   return a + b;
// }

// add(5, "abc"); // NaN

// kyunki "abc" number nhi


// chapter 37 Functions: Passing data back from them

// fuction se value wapas lena

// function sum (a,b){
//     return a+b
// }
// var results = sum(5,5)
// console.log(results);


// function se string wapas lena

// function sum (name){
// return "hello" + name    
// }
// console.log(sum(" Ali"));


// function sum(a,b){
//     a+b
//     return false
// }
// console.log(sum(3,3));


// boolen ma value lena

// function sum (num){
//     return num % 2 === 0;
// }
// console.log(sum(8));
// console.log(sum(0))


// chapter 38 local variable or Global variable..

// var num = "Ali"
// function sum (){
//     console.log(num)
// }
// sum()



// global variable bahar be or ander ma kam kar ta ha


// var name = "Ali" // global 

// function sum(){
// console.log(name);

// }
// sum()
// console.log(name)



// local

// function sum(){
//     var nameFast = "ali" ; // local
//     console.log( nameFast);
    
// }
// sum();
// console.log(nameFast)


// function add(a,b){
//     return a+b
// }

// function mult(a,b){
//     return a*b
// }

// function div(a,b){
//     return a/b
// }

// function sub(a,b){
//     return a-b
// }


// add(4,4)


// hoisting

// hoisting jisme varibale aur function declarations ko code run hone se pehle
// uper le jaya  ha memory ma

// sarif decleration hoist hai value assign nhi hoti

// console.log(a);
// var a = 20;

// js code ko run karna se pehle hoist
// lakin value assign nhi ho is code ma error nhi a gya undefined a gya

// hello()
// function hello(){
//     console.log("hi");
    
// }

// hello()
// var hello = function (){
//     console.log("hello");
// };
// error a gay


/* temporal Dead Zone (TDZ) kya hai? 
let aur const ka wo area jahan variable hoist to hota hai
lekin use karne par error aata hai.*/



// console.log(a) // yahan js a ko dhond rha ha
// var a = 10; // yahan a declare + value assign ho rha ha
// output undefined

// var a;            // declaration hoist ho gai
// console.log(a);   // a exist karta hai lekin value nahi
// a = 10;           // value assign hui


// var abc = 10;
// print()
// function print(){
//     console.log(abc);
//      abc =30;
//     console.log(abc)
// }


// chapter ....39.... switch statements How to start them.....

/* switch ek conditional statement hai jo ek variable ka hisaab se multiple option check karta ha */


var days = prompt("enter a day")
var days = "fri";

switch (days){
case "wed":
    console.log("today is wednesday")
break
    case "fri":
    console.log("today is friday" )
break
    case "sat":
    console.log("today is saturday")
break
    default :
    console.log("holiday")
}
