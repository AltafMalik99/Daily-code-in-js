// ...........chapter 35 functions.............

/* function ek aisa block hia jime code likha jata hai jo repeatable task perform karta
hai aik baar function likho aur baar - baar use kae sakte ho  
function code ko clean aur reusable banate hai*/


// function sum() {
//     console.log("hello world");
// }
// sum();
// sum();



// ...chapter 36... Functions: Passing them data


// function sum(a,b){
//     console.log(a+b);
// }
// sum(5,3)



// Note , function ko jo data dete ha = argument 
// function ke ander jo naam bante hai = parameter
// is process ka naam = passing data to function


// function sum(a,b) { // paremeters
//     console.log(a+b)
// }
// sum(2,2); // aurguments
// sum(10,20);
// sum(20,30)
// sum(50,50)
// sum(20,12)



// chapter 37.. function passing data back from them.....


// resturn...

// function sum(a,b) {
//     return a+b;
// };
// var abc=sum(5,2);
// console.log(abc);




// function  sum(a,b){

//     return a+b
// }
// var abc=sum(5,2)
// console.log(abc);



// function print (a,b) {
//     a+b
//     return 1;
// }
// console.log(print(3,3));



// chapter 38 .. function local vs global variables

// function ka ber jo variable bane rha ho wo global varible ha


// variable ke 2 types ha is ma

// 1 Global variable 
// 2 Local variable


// 1 Global variable har jaga kaam karta hai

// var x = 10 ;
// function show(){
//     console.log(x);
// }
// show();
// console.log(x)


// function ka ander bhi mill rah hai
// function ka bahar bhi mill rha hai
// is ko kehte hain global scope

// .....

// 2 local variable (sirf fubction ke ander)
// function ka ander banaya jaya
// sirf usi function ke ander kaam karta hai
// bahar access nhi hoti


// function test(){
//     var y = 5; 
//     console.log(y);
// }
// test();
// console.log(y)

// bahar wali line error degi kyun ke y sarif function ke ander zinda ha



// function sum (a,b){
//     return a+b
// }

// function div(a,b){
//      return a/b
// }

// function mul(a,b){
//      return a*b
// }

// function sub(a,b){
//      return a-b
// }



// sum(4,4)



// function add (a ,b = 2) { // default parameter
//      console.log(a+b);
// }
// add(3);


// var number = 234
// function test(){
//      alert(number)
// }
// test()








// function great(){
//     console.log("Hello, Altaf");
// }
// great() //function call 


// function functionName(){
//     console.log("Hello, world!");
    
// }
// functionName("")

// function fun(fName, lName) {
//     console.log(fName,lName);
// }
// var fName = "malik"
// fun(fName, "altaf");


// function func(lName,fName) {
//     console.log(fName, lName);
    
// }
// func("ibrahim" , "khan");


// function add (a,b = )


// function nice(name) {
// console.log("my name " + name + " is malik altaf");
// console.log("my name " +name +" is malik salman");
// console.log("my name is malik Atif");
// console.log("my name is malik noor");
// console.log("my name is malik Aftab");
// console.log("my name is malik Hamza");
// }
// nice("Saad")