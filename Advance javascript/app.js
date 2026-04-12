// Ems 6

/* advance js programming ko zayada powerfull aur secalable banata hi jaise
Asynchronous programming (promies async / await) 
object - oriented programming (classes . inheritance)
Function programming concepts (map ,filter, reduce)
Modules & import /export
Event loop , closures , scope
Error handling (try/catech)

 */


// let a = "altaf"

// var a = "noor"
// console.log(a);


// let se variable hoti hai value change ho sakti hai
// block-scoped hoti hai => ke andar accessible bahar nhi



// let age = 15;
// // age = 10; value change ho gayi
// console.log(age); // 10



// if(true){
//     let name = "altaf"
//     console.log(name); // altaf
// }
// console.log(name); // error 



// const se constant variable declare hoti hai 
// value change nhi ho sakti (immutable for primitive types)
// block-scoped hota hai
// agar const me object ya array store hai -> object array ke ander ke value
// change ho sakti ha lekin variable ko new  object assign nhi kar sakta 

// if(true){
//     const a = "altaf"
//     console.log(a);
// }


// const pi = 3.1451;
// pi = 232   // error value change nhi ho sakti
// console.log(pi);


// const user = {name: "malik"};
// user.name = "ali"; //object ka ander change allowed hai
// console.log(user.name); // Ali


// const a = {}
// a.name = "smit"
// console.log(a);



// noor()
// function noor(){
//     var hello = "noor"
//     console.log(hello);
// }



// for(var i = 0;i <5; i++){
//     console.log(i);
    
// }

// setTimeout (function(){
//     console.log("a");
    
// },2000)
// console.log("b");



// setTimeout (function(){
//     console.log("hello");
    
// },1000)
// console.log("malik");


// agar ap chahte ho ke error ke bawajood baaki code chale to (try catch) ka use karo

// try {
//     consoled.log("hello");// error wali line
    
// }catch (err){
//     console.log("error aaye",err);
    
// }
// console.log("malik");


// ............Event loop

// js ma sigle threaded hai matlab ek waqt me sirf ek kaam karta hai
// event loop ye ensure karta hai ke asynchronous code jaise settimeout fetch promises bhi proper sequence me run ho

// for(var i = 0;i <5;i++){
//     console.log("lsdl");
    
//     setTimeout (function (){
// console.log(i);

//     },2000)
// }
// console.log("abc");


//    setTimeout (function (){
// console.log("run ho gye");

//     },4000)



// colsures..

// closure ek function hai jo apne outer (baahar) function ke variables ko yaad rakhta ha 
// chahe outer function execute ho chuka ho

// or use case 
// private variables create karne ke liye
// data encapsulation data ko safe rakhne ke liye
// function 

// function abc(){
//     var a = 2;

//     function xyz(){

//     }

//     xyz();  

// }
// abc();



// function greeting(name){
//     let message  = "hello" + name;

//     function showMessage(){
//         console.log(message);
        
//     }
//     return showMessage;
// }
// const greetingAltaf = greeting(" malik")
// greetingAltaf();



// function counter (){
//     let count = 0 ;

//     return function (){
//         count++;
//         console.log(count);
        
//     }
// }
// const c1 = counter();
// c1();
// c1()
// c1()
// c1()



// private variable



// function counter(){
//     let count = 0 // ya private vatiable ha 

//     return function(){
//         count++;
//         console.log(count);
        
//     }
// }

// const myCounter = counter();
// myCounter(); 
// myCounter(); 
// myCounter(); 



// ......use private variable in bank 

// function creatAccount (initialBalance){
//     let balance = initialBalance // ya private variable ha

//     return{
//         deposit: function(amount){
//             balance +=amount;
//             console.log("deposite", amount);
            
//         },
//         withdraw: function(amount){
//             if(amount <=balance){
//                 balance-=amount;
//                 console.log("withdraw",amount);
                
//             }else{
//                 console.log("insufficient balance");
                
//             }
//         },
//         checkBalance: function(){
//             console.log("balance",balance);
            
//         }
//     }
// }

// const myAccount = creatAccount(100)

// myAccount.deposit(5000)
// myAccount.withdraw(200);
// myAccount.checkBalance(50);

// console.log(myAccount.balance);


// function test (){
//     let secret = "hello";
    
//     return function(){
//         console.log(secret);
        
//     }
// }
// const show = test ();
// show();
// console.log(secret);



// var student = {
//     name: "ali",
//     email: "abc@gmail.com",
// }
// let {name,email}= student
// console.log(name);
// console.log(email);



//  var student = {
//     name: "ali",
//     email: "abc@gmail.com",
//     classDet:{
//         time:"9:00",
//     }
// }

// let time = "123"

// let {name,email,classDet} = student;
// let {time: classTime } = classDet

// console.log(classTime);
// console.log(name);
// console.log(email);

// alias...

// kise cheez ko doosre naam se use karna

// const user = {
//     name: "maik",
//     age: 19
// };
// const {name: userName}= user;
// console.log(userName);


// object destructuring with computed property 

// object se value nikalte ho (destructuring)
// aur key dynamically variable se decide karta ha


// let student = {
//     name: "malik",
//     email: "zmaltaf99@gmail.com",
// }
// let search = "name";
// let {[search]:a} = student;
// console.log(a);


// array destructuring 


// let arr = ["ali" , "malik" , 123];
// let[a,b,c] = arr;
// console.log(a,b,c);


// function food(a = "not avilable", ...rest){
//     console.log(rest);
    
// }
// food("smit","noor","48","90", true)




// let arr = ["altaf","malik"]

// let arr1 = ["age", "20"]

// let arr2 = ["gmail", "abc@gmail.com"]

//  let marge = [...arr,...arr1,...arr2]

//  console.log(marge);
 


// let sdata = {
//     name: "altaf",
//     father: "m saleem"
// }

// let personal = {
//     email: "abc@gmail.com",
//     number: "0304*******12"
// }

// let study = {
//     class: "1st year",
//     subject: "math"
// }

// let marge = {...sdata,...personal,...study}

// console.log(marge);

