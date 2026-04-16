
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


