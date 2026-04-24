// let number = [1,2,3,4,5,6];
// let even = number.filter(num=> num % 2 === 0)
// console.log(even);

// is ma agar number 2 se divide ho kar remainder 0 de --> even hai


// let age = [12,21,22,17]
// let result = age.filter(num=> num >= 18)
// console.log(result);


// let users = [
//   {name: "Ali", active: true},
//   {name: "Ahmed", active: false},
//   {name: "Sara", active: true}
// ];

// let result = users.filter(user => user.active === true)
// console.log(result);


// find.........................

// let numbers = [5, 12, 8, 20, 25];
// let result = numbers.find(n => n >22)
// console.log(result);



// array me se pehla matching item return karta hai

// let student = [{ name: "ali", age: 20 }, { name: "malik", age: 21 }
// ,{ name: "saad bhai", age: 30 }]

// let result = student.find(function(name){
//     return name.age === 21
// })
// console.log(result);

// let user = [
//     { id: 1, name: "ali" },
//     { id: 2, name: "noor" },
//     { id: 3, name: "malik" }
// ];

// let result = user.find(u => u.id === 2)

// console.log(result);


// let product = [
//     {name: "mobile", price: 50000},
//     {name:"laptop",price: 120000},
//     {name:"mouse",price:1000},
// ]

// let result = product.find(p=> p.price > 50000)
// console.log(result);


// findindex................

// index number position deta hai

// let number = [5,12,8,20,25]
// let result = number.findIndex(function(num){
//     return num > 20;
// })
// console.log(result);


// let fruits = ["apple","mango","banana","orangi"]
// let result = fruits.findIndex(f=> f === "banana")
// console.log(result);


// let number = [5,10,15,20,25]
// let index= number.findIndex(n=> n >21)
// console.log(index);



// some.......
// check karta hai kay array me koi bhi element consdition satisfy karta hai
// agar q bhi match mila => true 
// agar koi matach nhi mila false

// let number = [5,12,8,20]
// let result = number.some(n=> n > 2)
// console.log(result);

// “kya array me koi bhi number 2 se bada hai?”


// let number = [1,2,3]
// let result = number.some(n=> n >10)
// console.log(result);   // false

// koi bhi number 100 se bara nhi ha 

// let number = [5,10,15,20]
// let result = number.some(n=> n > 15)
// console.log(result);   // true  


// every..............................


// check karta hai kay array me har element condition satisfy karta hai
// agar har element match mila => true 
// agar koi be ak matach nhi mila false

// let number = [10,20,30,40]
// let result = number.every(n=> n >7)
// console.log(result);   // true



// reduce.............
// array ka sab element ko mila kar 1 result bana hai (sum , total,average)


// let arr = [1,2,3,4]
// let result = arr.reduce(function(acc,num){
// return acc + num
// },0);
// console.log(result);

// logic 

/*0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10

*/

// let arr = [200,252,332,452]
// let result = arr.reduce(function(acc,num){
// return acc + num
// },0);
// console.log(result);


// let arr = [200,200]
// let result = arr.reduce(function(acc,num){
// return acc + num
// },20);
// console.log(result);




// Arrow function ...........................

// arrow function ek modren way hai function define karne ka jisme hum
// function keyword ke bajaye => use karta hai


// let greet = () => {
//     console.log("hello");
// }
// greet();


// let greet = () => console.log("hello");


// let result = x => x * x;
// console.log(result(5,5));


// let abc = (a,b) => {
//     return a * b;
// }
// console.log(abc(2,2));
// console.log(abc(2,5));


// let abc = (a,b) =>  a * b;
// console.log(abc(2,2));
// console.log(abc(2,5));


// let obj = {
//     name: "malik",
//     getName: ()=>{
//         console.log(this);
        
//     }
// }
// obj.getName()


// this 
// arrow function me this alag behave karta hai wo apna this nhi banata parent se leta hai



// setTimeout(() =>{
//     console.log("wait kar");
    
// },2000)


// function abc(){
//     console.log(arguments[1]);
    
// }
// abc(2,3)


// let user = {
//     name: "ali",
//     greet: () => {
//         console.log(this.name);
        
//     }
// }



// video 21
