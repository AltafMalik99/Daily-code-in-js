// var obj = {
//     name: "ali",
//     roll: 20,
//     age: 10,
// };


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


var obj = {
    name: "malik",
    age: 18,
    speed: function =>(){
     return   console.log(`my name is ${this.name} and my age is ${this.age}`);
        
    }
}
console.log(obj.speed());

