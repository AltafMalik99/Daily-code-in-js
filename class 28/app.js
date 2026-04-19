
// call ek method hai jo tumehe allow karta hai 
// function ko jaldi run karo + this ko manuallay set karo 



// function greet (){
//     console.log(this.name);

// }

//     let user = {
//         name: "altaf"
//     };
    
//     greet.call(user)

 // greet function hai tum ne likha .call(user) is ka matlab 
//  oye greet function tum this ko user bane ka run ho jao 

// this ka kaam hoti hai current object ko refer karna
// jis object ka ander tum kaam kar rhe ho this usi ko point karta hai

// function intro (){
//     console.log("My name is " + this.name);
// }

// let person1 = {name: "Ali"};
// let person2 = {name: "malik"};

// intro.call(person1);
// intro.call(person2)


// argument case............

// function greet (city){
//     console.log(this.name + " from " + city);
// }

// let user = {name: " altaf"}

// greet.call(user,"karachi")

// function greet (city){
//     console.log(this.name +" from"+ city);
// }

// let user = {name: "altaf"}
// greet.call(user," karachi")


// call() ma argument comma se jaate hai
// apply () ma argument array ma jaate hai


// function greet(city,country){
//     console.log(this.name + "from " + city + ", "+country);
    
// }

// let user = {
//     name: "altaf "
// };
// greet.apply(user,["karachi ","pakistan"])

