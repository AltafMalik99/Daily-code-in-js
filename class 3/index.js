// var a = 2
// var decre = a++
// console.log(decre);


/*a = 2

a me value 2 store hai.
var decre = a++
a++ = post-increment
Post-increment ka matlab:
Pehle purani value use hoti hai → ye value decre me store ho gayi
Phir a increment hota hai → a = 3
Isliye:
decre = 2
a = 3
console.log(decre)

Ye 2 print karega, kyunki decre me original a ki value store hui thi */




/* Important:
a-- negative number nahi banata
a-- bas current value return karta hai aur phir variable ki value 1 se kam kar deta hai
Agar a = 2 ho, a-- return 2, phir a = 1
Output me -2 nahi aayega kyunki -- operator variable ke value ko modify karta hai, return value ke saath negative sign automatic nahi lagta*/



/* Pre (++a, --a) → pehle change, phir use
Post (a++, a--) → pehle use, phir change
Console me jo print hota hai → return value hoti hai, variable ka final value alag hota hai.*/



// var a = 2
// var decre = a-- - --a - --a - --a
// // console.log(a-- + a-- );
// console.log(a);


var a = 1
var b = 1




/* a = 2

 a--
Post-decrement
Pehle value use hoti hai, phir a = a - 1 hota hai.
So
Use value = 2
New value = 1*/


/* --a
Pre-decrement
Pehle a = a - 1, phir value use hoti hai.
Current a = 1
After decrement: a = 0
Use value = 0*/


// Example 2

/*
Pehle value change hoti hai, phir use hoti hai.

var a = 5;
console.log(++a);

 Pehle a = 6
Phir console.log(6)
 Output: 6  */


 /* Pehle value use hoti hai, phir change hoti hai.
 
 var a = 5;
 console.log(a++)

 Pehle console.log(5)

Phir a = 6
Output: 5
Final value of a = 6
 */


