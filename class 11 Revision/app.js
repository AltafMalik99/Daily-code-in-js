// var arr = []
// arr[201] = "ali"
// console.log(arr);
// console.log(arr.length)

// chapter 18 for loop...


// for(var i = 0; i < 7; i++){
// console.log("hello world");
// }


// is ma teen chizea hoti ha
// 1 ensalzation 
// 2 condation 
// 3 increment


// table

// var num = prompt("enter a number " ,"6")

// for(var i = 1; i <= 10; i++){
// console.log(num + "x" + "*" + i + "=" +num*i);
// }


// without prompt

// for (var i=1;i<11;i++){
//     console.log('5 x ' + i + ' = ' + 5*i)
// }



// var cites = ["karachi", "lahore","punjab"];
// var cite = prompt ("enter your name","karachi")
// var found = false ;
// for(var i = 0;i <cites.length;i++){
// if(cite === cites [i]){
//     console.log(cite + " found")
//     found = true;
//     break
// }

// } if (!found){
//     console.log("not found")
// }


// var cites = ["karachi", "lahore" , "punjab"]
// var cite = prompt("enter a city name" , "karachi")

// var found = false
// for (var i = 0; i < cites.length; i++){
// if( cite === cites[i]){
//     console.log(cite + "found");
//     found = true
//     break
// }
// }
// if(!found){
//     console.log("not found")
// }



/* shuru ma hum keh rhe hai abhi city nhi mill ha is 
liye false 

jab user ko city array wali city se match ho jati hai
found = true 
Matlab city mill gayi 
break lagaya taake loop wahin ruk jaye*/


// var cites = ["karachi","lahore", "punjab"]
// var city = prompt ("enter city name")
// if(cites.includes(city)){
//     console.log(city + "found");
    
// }else{
//     console.log("not found")
// }


// var found = false

// var arr = [10,20,30,40]

// for(var i = 0 ; i<arr.length;i++){
// if (arr[i] === 10){
//     found = true
//     break
// }
// }
// console.log(found)


// var found = false;
// var arr = [10,20,30,40]

// for (var i = 0 ; i < arr.length;i++){
// if(arr[i] === 40 ){
//     found = true
//  break
// }
// } console.log(found)

// flag aik boolean variable hoti ha jo sarif do value rakhta ha true false


// break 

// for (var i = 2; i <= 20; i++){
//     if(i === 11){
//  break
//     }
//     console.log(i)
// }


// is ma human break lagey ha ab 13 tak value chale gya os ka bad value nhi chal gyae q ka hum na break lagya ha


// continue

// for (var i = 2; i< 20; i++){
//     if(i === 10){
// continue
//     }
//     console.log(i)
// }

// current loop iteration ko skip karta hai
// loop band nhi hoti sarif aik value chhor kar next  per chala jata hai



// chapter 20 nested loop...

// loop ka ander loop


// for (var i = 1; i<=2;i++){
    
//     for (var j = 1 ; j <=3; j++)
//         console.log("i=" + i + "j=" j);
        

// }



// array se part nikalta hai
// original array change nhi kar

// var cites = ["karachi", "multan","punjab"]
// var result = cites.slice(1,3);
// console.log(result);
// console.log(cites)


// splice

// var cities = ["karachi","multan","lahore"]
// cities.splice(1,1);
// console.log(cities);


// var cities = ["karachi","multan","lahore"]
// cities.splice(3,0 ,"punjab");
// console.log(cities);


// for loop............

// for loop tab use hota hai jab humein
// kise kaam ko bar bar repeat karna ho
// ya array ke element check karna ho



// for(var i = 2; i < 5; i++){
// console.log(i);

// }



// // var fruits = ["apple","banana","mango"];

// // for(var i = 0; i< fruits.length;i++){
// // console.log(fruits[i]);

// // }



// var cites = ["karachi","punjab","lahore"]
// var city = "karachi";
// var found = false;

// for (var i = 0; i <cites.length; i++ ){
//     if(cites[i] === city){
//         console.log("matched");
//         found = true;
//         break
//     }
// }
// if(!found){
//     console.log("not matched")
// }


// var cites = ["a","b","c"]
// var city = 'a'
// var found = false

// for (var i = 0;i < cites.length;i++){
// if (cites[i] === city){
// found = true
// console.log("mateced")
// }

// } if(!found){
//     console("not matched")

// }


// .....Reverse loop

// for (var i = 10; i >= 1; i--){
// console.log(i);

// }



//  even number 

// for (var i = 1;i <+20;i++){
// if(i % 2 == 0){
//     console.log(i + " even number");
    
// }
// }



// for (var i = 1; i <= 15 ;i++){
//     if(i % 2 !== 0){
// console.log(i + " odd number");

//     }
// }


// var cites = ["karachi","punjab","lahore"]

// for (var i = 0 ; i <cites.length; i++){
// console.log(cites [i]);

// }


//  var cites = ["karachi","punjab","lahore"]
//  var city = "karachi"

//  for(var i = 0; i <cites.length; i++){
//     if(cites[i] === city){
//         console.log("matched sucess")        
//     }else{
//         console.log("not matched")
//     }
//  }