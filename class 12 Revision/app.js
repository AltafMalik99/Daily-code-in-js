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

// var userName = prompt("enter your name ")
// var arr = ["saad","hamza","ali","asad"]

// var found = false

// for (var i = 0 ; i<arr.length;i++){

//     if(userName === arr[i]){
// found = true;
// break
//     }
// }if(found){
//     console.log("mil gaya ha " + userName);
    
// }else{
//     console.log("nhi mil " )
// }


// var name  = "Ali"
// console.log(name.toUpperCase());


// var name  = "Ali"
// console.log(name.toLowerCase());


// only first word captail


// var userName = prompt("enter a namr").toLowerCase();
// var arr = ["faisal","ali","altaf"]

// if(arr.includes(userName)){
// console.log("ok mila gaya ha yar "+userName);
// }else{
//     console.log("nhi mila yar ")
// }



// var text = prompt("enter a text");

// var result = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
// console.log(result);




// second example

// var text = prompt("enter a text");
// var result = text.charAt(0).toUpperCase() + text.slice(1);
// console.log(result);


// var para = prompt("enter paragraph");

// var words = para.toLowerCase().split(" ");
// var result = [];

// for (var i = 0; i < words.length; i++) {
//     result.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
// }

// console.log(result.join(" "));


// chapter 22 Strings Measuring length and extracting parts

// var text = "javascript";
// console.log(text.length);


// var text = "javascritp";
// var parts = text.slice(0,4)
// console.log(parts);

// var text = "javascritp";
// var parts = text.slice(-6)
// console.log(parts);


// var email = "admin@gmail.com";
// var user = email.slice(0, email.indexOf("@"));
// console.log(user); // admin


// .lenght string ki lenght batata hai
// string ka part nikalta ha 


// chapter 23 Strings Finding segments.....

// string ka ander koi word / letter / part dhoondhn


// pehli position batata hai

// var text = "javascript is very powerful language"
// console.log(text.indexOf("very"));


// lastIndexof()

// var text = "hello altaf kise ho"
// console.log(text.lastIndexOf("ho"));

// var text = "hello altaf kise ho"
// console.log(text.startsWith("hello "));


// var text = ("this a world war 2 stor")
// console.log(text.includes("war 2 "));

// matlab jo is ma text ha ap log ma wo lakh to true a gay agar kuchi or lakh gya to fasle a gya


// charAt..

// var text = ("this a world war 2 stor")
// console.log(text.charAt());

// return ek single character kar ta ha


// match.

// var text = ("this a world war 2 stor")
// console.log(text.match(/this a /g));

// var text = "i love java"
// var result = text.match(/java/g)
// console.log(result);


// var text = "apple banan apple"
// var result = text.match(/apple/g)
// console.log(result);


// string me kya pattern milta ha wo return karta hai ya null agar na mile

// replace

// string me ek value ko dusri value se replace karta ha

// var text = "this a world war 2 store and";

// text = text.replace("this a world war 2 ", " Second World War ");

// console.log(text);



// var text = "this is a ball"
// text = text.replace("this is a ball","and a apple")
// console.log(text);


// var text = "ali"
// user = text.replace("ali", "@ali");
// console.log(user)

// is ma jo value add kar na ha or jo remove kar ne ha or is ma ap value add be kare sagta ho



// replaceAll..

// var text = " banana apple banana apple";

// text = text.replaceAll(" apple"," mango ");

// console.log(text);

// var text = "hello hello hello";
// var newtext = text.replaceAll(/hello/gi, "hi")
// console.log(newtext);


// jitni baar hello aayega sab replace ho jayega hi se





// chapter 25.. Strings:Replacing characters

// var text = "Altaf malik smit student"
// var user = text.replaceAll(" ", "_")
// console.log(user);


// chapter 26 Rounding number 
// inshallah next class ma 