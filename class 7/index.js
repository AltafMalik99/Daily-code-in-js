// .....chapter 26 Rounding number ....


// var mathematics = Math.random()
// console.log("mathematics =>",mathematics);

// is ma sar dafa refers kar na ap nay number generat ho gya


//       0.             6444954135630876
//    characterstics         mansissa

// var Maths = Math.round (Math.random());
// console.log(Maths);

// is ma 1 or 0 ka demayan number a gye


// var Maths = Math.round(Math.random() * 10)
// console.log(Maths);



// ....nearest round..

// “Nearest round” ka matlab hai number ko qareebi (sab se nazdeeki) poore number par round karna


// var Maths = Math.round(2.5) // output 3
// console.log(Maths);



// ceil...

/* ceil (Math.ceil) javascript ka function hai jo kisi nnumber ko uper wali poori ginti (greater integer) per le jata hai chahe decimal chhota ho ya bara.  */


// var rounds = Math.ceil(3.1)  // output 4
// console.log(rounds);

// // hamesha uper round


// var rounds = Math.floor(3.9)  // output 3
// console.log(rounds);

// hamesha neeche round

// jo number ha os ka dermyan ma



/* ceil = upar ki taraf
floor = neeche ki taraf
round = qareebi number */


// stack overflow 



// ..chapter..27...Generating random numbers...

/*random number generate karna ka matlab hai aise numbers banana jo 
unpredictably appear hai jise dice roll lotters number game scores */


// var num = Math.floor(Math.random() * 10)
// console.log(num);

// Har dafa run karne par random number change hoga.

// var die = (Math.random()* 6) 
// var dieWithfloor = Math.floor(die)
// console.log("die",dieWithfloor);




//... chapter ..28....  coverting strings to integers and decimals....


// coercion

/* javascript ma coercion ka matlab hoti ha automatic type conversion yani 
jab js khu ba khud ek value ka data type badal deti hai take code chal sage */

// js kisi value ko apne aap number string ya boolean me convert kar leti hai


// var result = "5" + 2;
// console.log(result);

// 5 ek string ha aur 2 number js automaticall 2 ko string me badal kar 52 bana data hai

// var result = "5" - 2;
// console.log(result);

// 5 string thi js ne use number me convert kar diya ha



// var age = prompt("enter a age")
// var result = parseInt(age) + 1
// console.log(result);
// intergers ma be convert kar de gya 


// var age = prompt("enter a age")
// var result = parseFloat(age) + 1
// console.log(result);

// intergers ma be convert kar de gya or poor point ka bad wale value be de gya



// chapter.. 29......... Converting strings to numbers, numbers to strings......

// var number = 89
// var str = number.toString()
// console.log(typeof str);


// yani jab koi text number me badalna ho


// var str = "123"
// var num = Number(str);
// console.log(typeof num);

