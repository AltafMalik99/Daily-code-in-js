
// function data () {
//     const person = "noor"
//     console.log(person);
    
// }


// let obj = {name: "ali"}

// let obj1 = obj

// let obj2 = obj1;

// obj.name = "noor"
// console.log(obj,obj1,obj2);

// matlab teeno variables ek hi object ke copy by reference hai



// shallow copy..............................................................


// let obj = {name: "ali"}     // ek object bana memory me

// let obj1 = obj      //copy nhi bani sirf reference mila obj aur obj1 dono same object point kar rhe hai

// let obj2 = {...obj1};   // yaha spread operator use hua ab ek naya object create hua shallow copy

// obj2.name = "noor" // sirf obj2 change hua original obj aur obj1 per koi effect nhi 

// console.log(obj,obj1,obj2);



// let obj = {
//     name: "ali",
// school: {
//     name: "smit"
// }
// } ; 


// let obj1 = obj    

// let obj2 = JSON.parse(JSON.stringify(obj));  

// obj2.school.name = "saylani"

// // obj2.name = "noor" 

// console.log(obj,obj1,obj2);


// shallow copy 
// object ya array ki copy banti ha lekin ander ka nested ander wala same refercece prt rehte hai



// Rest parameter

// function cartTotal(userName, ...prices) {
//   let total = 0;

//   for (let price of prices) {
//     total += price;
//   }

//   console.log(userName + " ka total bill: " + total);
// }

// cartTotal("Altaf", 100, 200, 300, 150);


// Enhanced object literals........................................


// es6 me short aur clean code lika sakta ha short cut key

// let student = "ali";
// let school = "smit";

// let obj = {
//     student,
//     school
// }

// console.log(obj);


// let student = "ali";
// let school = "smit"
// let city = "karachi"

// let obj = {
//     student,
//     school,
//     city,
// }
// console.log(obj);



// let student = "noor"
// let school = "smit"

// let obj = {
    //     student: student,
    //     school: school
    // }
    // console.log(obj);
    
    // ab use nhi hoti code zayda ho jati ha 


    // optional chaining .............................................................

/* ye js ka feature hai jo safa tareeke se object ki value accces karta hai 
agar koi property exista na kare to error nhi deta bus undefined de deta hai */


// let user = {};
// console.log(user.address.city);

// error ata hai kyunki address exista hi nhi karta


// let user = {};
// console.log(user?.address?.city);  // undefined

// ab error nhi aaya gay kyunki humne ? lagya ha


// let student = {
//     name: "ali"
// };
// console.log(student?.name);  // ali
// console.log(student?.marks);  // undefined




// let obj = {
//     name: "malik",
//     school: {
//         name: "smit"
//     }
// };
// console.log(obj.school.detail);
// console.log(obj.name);


// real life use in website and app

//  api data me kabhi data missing hota hai forms / user data safe coding  no app crash nhi hoti 
// error se bachne ka safa shortcut ha





// callBack................................................................................................



// callback ek function jo kisi dusre function ko argument ke taur pe diya jata hia aur baad me call hoti  
 
// ek function ko doosre function ke ander bhejna aur wahan use chalana,

// function greet(name,callBack){
//     console.log("hello" + name);
//     callBack();

// }
// function sayBye(){
//     console.log("bye!");
    
// }

// greet("Altaf",sayBye)




// function abc(cb){
//     setTimeout(function (){
// console.log("hello");
// cb();        // call hoga jo callBack function hai 

//     },2000 )
// }


// function myCallBack(){
    // console.log("abc free hoagay ha ab");
    
// }

// abc(myCallBack);


// callback hell ...



// promises......................

// callback ka modern version callback hell problem solve karta HTMLDetailsElement
// .then() aur .catch use hota hai





// array methods..........................................................................................


// let arr = ["karachi", "lahore","islamabad"]
// arr.forEach(function(elem, i,all){
//     console.log(elem,i,all);
    
// })


// let arr = ["karachi","lahore","islamabad"]

// let result = arr.map(function(elem,i){
//     return `${else}, pakistan`
// })
// console.log(result);



// 41