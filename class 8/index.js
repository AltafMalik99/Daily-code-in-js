// var number = 23.5457
// var fixeNumber = number.toFixed(2)
// console.log(number);
// console.log(fixeNumber)

/*1) toFixed()
Sirf decimal places fix karta hai
Aur string return karta hai */


// 2 toPrecision()

// var num1 = 23.3443
// var num2 = num1.toPrecision(2)
// console.log(num2);



// var number2 = 23.5
// var number2 = number2.toString()

// if(number2.charAt (number2.length -1 ) == "5" ) {
//     number2=number2.slice(0,number2.length - 1) + "6"
//     console.log("number 2 ",number2);
    
// }


// var number2 = 1.6;
// number2 = number2.toString();

// if (number2.charAt(number2.length - 1) == "5") {
//     number2 = number2.slice(0, number2.length - 1) + "6";
// }

// console.log(number2);




// .....chapter 31 Getting the current data and time ......

// var data = Date()
// console.log(data);


// var date = new Date();
// console.log("year=>",date.getFullYear());
// console.log("date=>",date.getDate())
// console.log("day=>",date.getDay())


// var date = new Date();
// console.log("date=>," ,date.getFullYear());
// console.log("date=>", date.getDate());

// var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday","saturday"];
// console.log("day=>" , days[date.getDay()])


// console.log("Month",date.getMonth());
// console.log("hours", date.getHours());
// console.log("Minutes",date.getMinutes());
// console.log("second" ,date.getSeconds())
// console.log("Millisecond", date.getMilliseconds())


// pm or am
// console.log(new Date().toLocaleString());


// console.log(new Date().toLocaleString('en-US', { hour12: true }));


// .......chapter no 32... Extracting parts of the date and time

/* curremt date ,time se year , month , day ,hours , minutes , seconds alag alag niklana
js ma ya sab date object se hoti hai */


// var now  = new Date();

// var year = now.getFullYear();
// var month = now.getMonth() + 1;
// var day = now.getDate(); 
// var week = now.getDay();

// console.log("year=>",year);
// console.log("month=>",month);
// console.log("day=>",day);
// console.log("week=>", week);

// var hours = now.getHours();
// var minutes = now.getMinutes();
// var second = now.getSeconds();
// var ms = now.getMilliseconds();

// console.log(hours);



// var now = new Date()

// let hours = now.getHours();     // 0–23
// let minutes = now.getMinutes(); // 0–59
// let seconds = now.getSeconds(); // 0–59
// let ms = now.getMilliseconds(); // 0–999

// console.log("hours",hours);
// console.log("minutes",minutes);
// console.log("second",seconds);
// console.log("millisecond", ms)


// var now = new Date

// console.log("month=>",now.getMonth())
// console.log("year=>", now.getFullYear())
// console.log("date=>", now.getDate())
// console.log("Hours=>", now.getHours())
// console.log("Minutes=>", now.getMinutes())
// console.log("seconds=>", now.getSeconds())
// console.log("millisecond=>", now.getMilliseconds());

// var now = new Date()
// var hours24 = now.getHours();
// var ampm = hours24 >= 12 ? "PM" : "AM";
// var hours12 = hours24 % 12 || 12;
// console.log(hours12 + "" + ampm  );




// ....chapter.... 33.... Specifying a date and time......

/* js me date objact ka use current date & time ke liye hoti hai
lakin kabhi- kabhi hume specific date aur time set karna hoti hai jaise
 Birtday ya anniversary ka date kise event ka schedule */


// Date object ke zariye apni marzi ka date & time create karna aur usko program me use karna.


// var date = new Date ("2025-12-30t12:13:00")
// console.log(date);


// Individual Components → year, month, day, hours, minutes, seconds
// var data = new Date(2025,11,30,17,45,0)
// console.log(data);



// let birthday = new Date("2025-12-31T00:00:00");
// let now = new Date();

// let diff = birthday - now; // difference in milliseconds
// let days = Math.floor(diff / (1000 * 60 * 60 * 24));

// console.log("Days left for birthday:", days);



// ...chapter 34... Changing elements of a date and time...


/* kisi date ka year , month , day , hours , change karna 
schedule update karna ya alarm set karna date based calculation ke liye */

// var date =  new Date ("2025-12-30T10:30:00");
// console.log("original date" , date);


// // change year , month , day

// date.setFullYear(2026);
// date.setMonth(0);
// date.setDate(15);

// console.log("updated date", date);

// // change time

// date.setHours(20);
// date.setMinutes(45);
// date.setSeconds(30);

// console.log("updated date & time", date)




