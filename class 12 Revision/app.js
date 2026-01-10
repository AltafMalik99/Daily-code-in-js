// chapter 21. changing cases ...


// var userName = prompt("enter your name")
// var arr = ["saad","ali","noor","hamza"]

// for (var i = 0; i <arr.length;i++){
// if(userName == arr[i]){
//     console.log('yes',userName);
   
//  }
// else{
//     console.log('no')
//  }
// }

// var cites = prompt ("enter a city name ")
// var cites = ["karachi","lahore","punjab"]
// var city = "karachi"
//  for(var i = 0; i <cites.length; i++){
//     if(cites[i] === city){
//         console.log("matched sucess")   
//         break     
//     }else{
//         console.log("not matched")
//     }
//  }


//  var userName = prompt ("enter your name ")
//  var arr = ["saad","bilal","asad"]

//  var found = false;

//  for (var i = 0; i<arr.length;i++){
// if(userName === arr[i]){
//     found = true;
//     break;
// }
//  }

//  if(!found){
// console.log("mil gaya ha" + userName);

//  } else{
//     console.log("nhi mila")
//  }

var userName = prompt("enter your name ")
var arr = ["saad","hamza","ali","asad"]

var found = false

for (var i = 0 ; i<arr.length;i++){

    if(userName === arr[i]){
found = true;
break
    }
}if(found){
    console.log("mil gaya ha " + userName);
    
}else{
    console.log("nhi mil " )
}