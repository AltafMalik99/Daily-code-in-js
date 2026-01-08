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


var cites = ["karachi", "lahore" , "punjab"]
var cite = prompt("enter a city name" , "karachi")

var found = false
for (var i = 0; i < cites.length; i++){
if( cite === cites[i]){
    console.log(cite + "found");
    found = true
    break
}
}
if(!found){
    console.log("not found")
}