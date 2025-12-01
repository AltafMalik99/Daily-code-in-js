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



var a = 2
console.log(a-- + a--);
// var decre = a-- + a--


