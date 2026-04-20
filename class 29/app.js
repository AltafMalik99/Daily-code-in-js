
// foreach

// foreach kuch retur nhi kar ta


// foreach array ka method hai jo har element per ek function run karta hai 
// ye mainly loop chalane ka liye hota hai


// let user = ["ali","noor","sara"];
// user.forEach(function (name){
//     console.log("hello " +name);  
// })




// let number = [1,2,3,4]
// number.forEach(function (num){
//     console.log(num);
    
// })

// let arr = ["karachi","islamabad","lahore"]

// arr.forEach(function (elem,i,all){
//     console.log(elem,i,all);
    
// })



// parameter              meaning
//    elem                    current value item 
//    i                          index
//    all                            poora array 



// map Array method ................................................................

// map kay karta ha array ka har element per function chalata hai
// aur naya array return karta hai 
// map new array retunr karta hai data transform karta hai  

// let arr = ["karachi","islamabad","lahore"]

// let result =  arr.map(function (elem,i){
//     return `${elem},pakistan`
// })
// console.log(result);



// best logic question

/*  return milte ha function exit ho jata hai value wapas de di jati hai
uske badd jo bhi likha ho ignore / skip ho jata hai  isko unreachable code ya dead code kehte hai*/


// ......... question answer

// har number ko double karo


// let arr = [1,2,3,4,]

// let result = arr.map(function(num){
//     return num *2
// })
// console.log(result);   // 2,4,3,8

// logic ...

// map (har number uthata hai)
// num * 2 return karta hai 
// new array ban jata hai



// let name = ["altaf","saad bhai","sara"]
// let result = name.map(function (name){
//     return name + " hello"
// })
// console.log(result);

// gar name ke sath string join ho rhe hai



// let name = [2,4,6]
// let result = name.map(function(num){
//     return num * num
// })

// console.log(result);   // 4,16,36



// let word = ["karachi","islamabad","lahore"]
// let result = word.map(function(word){
//     return word.toUpperCase();
// })
// console.log(result);



// let user = [
//     {name: "altaf",age:20},
//     {name: "noor",age:21},
//     {name: "ahmed",age:23},
// ];

// let result = user.map(function (user){
//     return user.name
// })
// console.log(result);

// her object se name property uthayi


// let arr = [10,20,30];
// let result = arr.map(function(elem,i){
//     return i + ":" + elem
// })

// console.log(result);


// let price = [100,200,300]
// let result = price.map(function(price){
//     return price + price * 0.10
// })
// console.log(result);


// let arr = [1,2,3,4,5,6];

// let result = arr.map(function(num){
//     if(num % 2 === 0){
//         return num *2;
//     }else {
//         return num
//     }
// })
// console.log(result);



// filter .....................................................................................




// filter kay karta hai array ka har element per function chalata hai
// sirf un Element ko rakhta hai jo condition true karein


// let arr = [1,2,3,5,6]
// let result = arr.filter(function(num){
//     return num % 2===0
// })
// console.log(result);


// let arr = ["karachi","islamabad","lahore"]

// let result = arr.filter(function(){
//     return false
// })
// console.log(result);



// let arr = [{name: "karachi", population: 1000} , {name: "lahore",population: 500}]

// let result = arr.filter(function(elem){
//     return elem.population > 600;
// })

// console.log(result);


//  1:23