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

function sum (name){
    return "hello" + name
}
console.log(name("Ali"));

