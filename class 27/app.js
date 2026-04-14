
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


let obj = {name: "ali"}

let obj1 = obj

let obj2 = {..."noor"}


obj.name = "noor"
console.log(obj,obj1,obj2);