// alert ("hi Altf")

// var                               name = "Altaf"
// ya variable ka key word ha ,   ya variable name ha 


// var name = "Altaf"
// console.error(name);


// var names = {
//     names: "altaf",
//     roll : 123,
//     age : 18
// };
// const myName = "altaf";
// const lastName = "malik"
// console.table(names);


// var myFirstName = "Altaf";
// var myFirstName = "malik" // reinitialize
// console.log(myFirstName);
 



// chapter 5.... Math expressions Familiar operators

// var num = 20
// console.log(10+num);


// var num1 = 10;
// var num2 = 10;
// var sum =  num1 + num2
// console.log(sum);

// var a = "2";
// var b = "10";
// console.log(a-b);



// var num = 4
// var num = 5
// console.log(12+num);

// % modules ya division ka baqi hissa (remainder retiur karta hai)

// var a = 31
// var b = 10
// console.log(a%b);

// console.log(10%3);

/* 10 ÷ 3 = 3
3 × 3 = 9
10 − 9 = 1 (remaider)*/

// console.log(8%2); // 0 even number
// console.log(9%2) // 1 odd number
// console.log(17%5) // 2


// chapter.... 6 Math expressions Unfamiliar operators


// post-increment

// var x = 5;
// var y = x++; // pehle value use phir barhao
// console.log( x,y); // 6 ,  5


// pre increment

// var a = 5;
// var b = ++a; pehle barhao phir use
// console.log(a,b); // 6 , 6


/*
 a = 5      // initial
++a        // pehle a = 6
b = a      // b me assign ho gaya 6

*/


// var a = 2;
// console.log(a++);
// console.log(a++)


// var a = 3; // 3
// a++ // 3  => 4
// console.log(a++); // 4 => 5
// console.log(++a) // 6


// var x = 3;
// var y=x++;
// console.log(x+y);

/*y ko value mili 3
phir x ban gaya 4 */




// Decrement operator

// var x = 5;
// x--
// console.log(--x);
// console.log(x--);


// post

// var x = 5 ;
// var y = x--; //y ko x ki current value milti hai → y = 5
// console.log(x,y);

// pre

// var a = 5;
// var b = --a;
// console.log(a,b); // 4,4


// chapter....... 7 Math expressions Eliminating ambiguity

// Bodmas Rule ko follow kare gay

/* parentheses() hamesha sab se pehle slove hoti hai
Multiplcation * aur Division / solve hoti hai
Addition + aur subtraction - left to right hoti hai */


// var result = 2 + 2  * 4;
// console.log(result);


// var result = (2+3) * 4
// console.log(result); // 20

// pehle (2+3) = 5
// phir 5 * 4 = 20

// var x = 10 - 2 * 3 + 4 / 2;
// console.log(x);

/* * and / pehle
2*3 = 6
4/2 = 2
Expression ab: 10 - 6 + 2
Left-to-right + and -
10 - 6 = 4
4 + 2 = 6
 Output: 6*/


// var a,b,c;
// a = b = c = 5; // right to left
// console.log(a,b,c); // 5,5,5


// chapter 8..... concatenating text string.....

// js ma + operator use hota hai string ko join karna ke liye

// var firstName = "Altaf";
// var lastName = " Malik";
// var fullName = firstName + " " + lastName;
// console.log(fullName);

// var name = "Altaf";
// var age = 18
// console.log(name + "is " + age  + "years old");


// agar number aur string + se join ho number string me convert ho jata hai

// console.log("Age " + 5 +3);
// console.log("Age " + (5+3));


// chapter... 9 prompts

// prompt ek built js function hai 
// user se input lene ke liye use hoti hai
// browser ma popup box opern karta hai jahan user type kar sakta hai


// var name = prompt("Enter your name");
// console.log("Hello "+name + " welcome to imtiaz");


// var age = prompt("enter your age");
// console.log("you are " + age + " year old ");


// var num1 = prompt("enter  first number")
// var num2 = prompt("enter a second number");
// var sum = Number(num1) + Number(num2)
// console.log("sum=>" + sum);

// let x = prompt("Enter first number:"); // suppose user enters 4
// let y = prompt("Enter second number:"); // suppose user enters 5
// console.log(Number(x) * Number(y));




// var name = prompt ("enter your name", "enter ",20)
// console.log(name-10);


// var name = prompt ("enter you are name", "Altaf")
// console.log(name.toUpperCase())

// parseInt...

// var num1 = parseInt("123")
// console.log(num1);
// console.log(typeof num1)


// string ko number kar de na

// var num2 = parseInt("123abc");
// console.log(num2); // 123

// number ko string ma kar de na

// var num = 123 ;
// var str = String(num);
// console.log(str);
// console.log(typeof str)



// chapter 10 if statements......

// var flag = false
// if(!flag){
//     console.log("hello world");
    
// }

// if (!false) {
// console.log("allow");
// }
// else {
//     console.log("not allow")
// }


// var num = 9
// if(num>20){
//     console.log("hello world");

// } else if (num>=10){
//     console.log("world hello");
// }

// else{
// console.log("invalid!")
// }



// var marks = 75;

// if (marks >= 50){
//     console.log("A grade");

// } else if (marks >=60) {
//     console.log("B grade");

// }else{
//     console.log("fail")
// }




// var age = Number(prompt("enter a your age"))
// if(age >=18){
//     console.log("allow");
// } else{
//     console.log("not allow")
// }


// var marks = Number(prompt("Marks likho:"));

// if (marks >= 40) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }


// var x = prompt("enter a name")
// if(x== "pakistan"){
//     alert ("correct")
// }
// if(x!=="karachi"){
//     alert("wrong")
// }

// var x = prompt("enter a name");
// if(x === "pakistan"){
// }else{
//     alert("wrong")
// }


// chapter 11 comparison operators...

// console.log(5=="5"); // true value same
// console.log(5==="5"); // false 
// console.log(10!=5); // true
// console.log(3!=="3");


// 1 equal (==) sarf value check karta hai typr ignore karta hai

// console.log( 5 == '5'); is laiye true a rha ha 

//2 strict equal (===) value type dono check karta hai
// console.log(5==='5'); false
// console.log(5 === 5); // true



// 3 Not equal (!=) sirf value compare karta ha agar value barabar nhi true
// console.log(5!='5'); //true
// console.log(5!=5);// false


// 4 strict Not equal (!==) value + type dono check karta hai agar same type + value nhi true

// console.log(5!=="5");
// console.log(5!==5);


// 5 Greater than (>) / less than (<) do numbers ka size compare karta hai
// kay pehla number doosre se bara ha 
// console.log(10>5);

// kay pehle number dooser se chhota hai
// console.log(2<5);


// 6 Greater or equal (>=) / less or equal (<=)
// kay pehle number dooser se bara ya barabar hai
// yani check karta hai bada ya equal dono condition

// console.log(5>=3); true
// 5 bara ya barabar hai 3 ke 

// console.log(7>=7);
// 7 bara ya baraber hai 7 ke

// console.log(2>=5);
// 2 bara ya baraber ha 5 ke



// video 41