// // localStorage
// browser me data save karna ka method hai data tab tak rehta hai jab tak user delete
// na kar pages close karna ke baad bhi data save rehta hai

// localStorage.setItem("username","Altaf")

// Data get karna........................
// localStorage.setItem("altaf")
// var user = localStorage.getItem("username");
// console.log(user);


// localStorage.setItem("userName", "Ali")

// var user = localStorage.getItem("username");
// console.log(user);


// setitem.............................................

// localStorage.setItem("name", "alatf")

// setitem ka kam data ko browser me sava karna


// getitem......................................

// localStorage.setItem("name","Altfa")

// var user = localStorage.getItem("name")
// console.log(user);

// data read karta ha


// Removeitem .......................................

// localStorage.setItem("name1","noor")
// localStorage.setItem("name2","malik")
// localStorage.setItem("name5","hussan")
// localStorage.setItem("name3","amhed")
// localStorage.setItem("name4","aman")
// localStorage.removeItem("name")
// localStorage.removeItem("name1")

// "name" key ko delete kar dega 


// ................assigiment project..................................................................................................



function register (){
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var user = localStorage.getItem("user")
    console.log(name.value , email.value, password.value);
}

// video 8













// function getUser(){
//       var users = localStorage.getItem("user")

//      if(users){
// users = JSON.parse(users);
//      }else{
//         users = [];
//      }
//      return users;
// }


// function register(){
//     var name = document.getElementById("name")
//      var email = document.getElementById("email")
//      var password = document.getElementById("password")

// var users = getUser();

// //      var users = localStorage.getItem("user")

// //      if(users){
// // users = JSON.parse(users);
// //      }else{
// //         users = [];
// //      }

     

// var newUsers = {
//     name: name.value,
//     email: email.value,
//     password: password.value,
// };

// users.push(newUsers);
// localStorage.setItem("user", JSON.stringify(users))

// name.value = "";
// email.value = "" ;
// password.value = "";
// }


// // login.............

// function login(){
//     var name = document.getElementById("login-name")
//      var email = document.getElementById("login-email")
//       var password = document.getElementById("login-password")

//   var users = getUser()

//   var savaUser = {}
//     for(var  i =   0;i<users.length;i++){
//         if(email.value === users[i].email){
//             savaUser = users[i]
//             break;
//         }

//     }
  
//       if(savaUser.email){
// if(savaUser.password === password.value){
//     console.log("userlogin successfull");
    
// }else{
//     console.log("invaild password");
    
// }
//       }else{
//         console.log("user not found");
        
//       }
      
// }
