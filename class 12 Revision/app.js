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

// Rounding ka matlab hoti hai decimal number ko qareebi integer poor number me badalna

// var maths = Math.random();
// console.log("maths=>",maths);

// is ma har daf her number refers ho gya


// var Mt = Math.round(Math.random())
// console.log(Mt);

// 0 se 1 tak



// var mt = Math.round(Math.random()*12)
// console.log(mt);



// ....nearest round..

// “Nearest round” ka matlab hai number ko qareebi (sab se nazdeeki) poore number par round karna

// var maths = Math.round(4.5)
// console.log(maths);


// ceil...

/* ceil (Math.ceil) javascript ka function hai jo kisi number ko uper wali poori ginti (greater integer) per le jata hai chahe decimal chhota ho ya bara.  */

// var maths = Math.ceil(2.3)
//  console.log(maths);  // output 3

// // hamesha uper round


// var maths = Math.floor(2.6)
// console.log(maths); //output 2

//  hamesha neeche round
// jo number ha os ka dermyan ma


// chapter 27 Generating random number


// var maths = Math.floor(Math.random()* 10);{
//     console.log(maths);
// }

// var maths = Math.floor(Math.random()*10) + 1;
// console.log(maths);


// min aur max define karo

// var min = 5;
// var max = 15;

// var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNum);


//chapter 28... Converting strings to integers and decimals

/*jab hum prompt se input lete hai wo hamesha string ma hota hai
math calculcation ke liye hume number me convert karna hoti hai */

// kise number ka hum string ma kar sakta ha 
// kise be string  ko hum number ma be kar sakta ha  

// var num = "123.432"
// var result = parseInt(num);

// console.log(result);


// parseFloat() → String to Decimal is point ka bad wala number be show kar ta ha paresInt se point ka bad wala value show nhi ho ti ha 

// var num = "23.33dd";
// var result = parseFloat(num);
// console.log(result);
// console.log(typeof result)


// var weight = prompt("enter a weight")
// var result = parseInt(weight);

// alert("you weight is" + result )





// chapter 29... Converting strings to numbers, numbers to strings

/*jab user prompt ya kise variable se string leta ha aur uska number me convert karna ho  */


// var num  = "12.3"
// var result = Number(num);
// console.log(result);


// var num = 123
// var result = String(num)
// console.log(result);
// console.log(typeof result)

// var num = 1232.21
// var result = num.toString();
// console.log(result + 1);
// console.log(typeof result)

// var num = 1232.21
// var result = toString(num)

// console.log(result );
// console.log(typeof result)


// var age = 20;
// console.log("Age is " + age.toString());

// toString() = number ko text bana do


// chapter ...30 Controlling the length of decimals

/* ya topic especially jab hum proce marks height , weight ya parcentage dikhate ho*/

// var num = 3.54545451
// console.log(num);


// tofixed....

// var num = 3.142112315616;
// var result = (num. toFixed(2)); // decimal tak
// console.log(result);   // "3.14"
// console.log(typeof result)  // string


// var num = 3.142112315616;
// var result = parseFloat(num. toFixed(2)); // decimal tak
// console.log(result);   // "3.14"
// console.log(typeof result)  

// toFixed() number return nahi karta, string return karta hai.




// var num = 3.551112565;
// var result = Math.round(num * 100) / 100;
// console.log(result);

// var num = 3.141595455;
// var result = Math.round(num * 100) / 100; // 2 decimal
// console.log(result); // 3.14
// console.log(typeof result); // number


// var num = 3.143565656;
// console.log(num.toFixed(5));
// console.log(Math.round(num*100)/100)



// var price = 1199.515;
// console.log("price : $" + price.toFixed(1));


// chapter 31 Getting the current date and time


// var time = new Date()
// console.log(time);

// var time = new Date();
// console.log(time.getDate());
// console.log(time.getHours())
// console.log(time.getFullYear())
// console.log(time.getMilliseconds())

// var now = new Date();
// var dateText = now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear();
// console.log("Today is: " + dateText);


// var now = new Date();
// var textTime = now.getHours()+ ":" + now.getMinutes()+ ":" + now.getSeconds()
// console.log("current time ", textTime);


// chapter 32 Extracting parts of the date and time

// var now = new Date();

// console.log(now.getHours());
// console.log(now.getMonth()+1)



// var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday","saturday"];
// console.log("day=>" , days[Date.getDay()])


// pm or am

// console.log(new Date().toLocaleString());

// console.log(new Date().toLocaleString('UR-US', { hour12: true }));

// var weekname = ["sunday","monday","tuesday","wednesday","thursday","firday"]

// var today = new Date();
// var todayname = weekname[today.getDay()];
// console.log("Today is "+ todayname);


// chapter 33 Specifying a date and time

// is topic ma apni choice ka data and time set kar sakta ha

// var myDate = new Date(2026,1,23);
// console.log(myDate);

// var myDate = new Date(2026,1,2,2,5,12)
// console.log(myDate);

// var myDate = new Date("2026-01-20 15:30:45");
// console.log(myDate);


// Format: "YYYY-MM-DD HH:MM:SS" recommended

// chapter 34 Changing elements of a date and time

// var a = new Date();
// a.setMonth(7);
// console.log(a);


//  var a = new Date();
// a.setDate(3);
// console.log(a);


// var a = new Date();
// a.setDate(21);
// console.log(a);
