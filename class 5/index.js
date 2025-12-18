// var arr = ["a" ,"b" , 3,1]
// console.log(arr.length)
// console.log(arr.length-1);


// var twoDarray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9, [2, "g", ["c", 10]]],
// ];
// // console.log("twodarray",twoDarray);
// // console.log("lenght", twoDarray.length)
// console.log(twoDarray[2][3][2][0])




// var today = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9, [2,"g" , ["c" , 20]]]
// ];
// console.log (today[2][3][2][0])



// assignments
// var arr1 = [[1,2,3,4,],[4,5,6],[7,8,9]]
// var arr2 =  [[9,8,7], [6,5,4], [3,2,1]]

// var result = arr1 + arr2 
// console.log(result [0][0][0]);





// ......chapter..18...for loop........

// what is for loop 
/* for loop ek aisa loop hai jo code ko bar bar repeat karne ke liye use
use oti ha jab tak koi condtion true ho */
  




// var twoDarray = [[1,2,3] ,[4,5,6],[7,8,9]]

// for(var i=0; i<twoDarray.length; i++){
//     for (let j = 0; j < twoDarray[i].length; j++){
//     console.log(twoDarray[i][j]);
//     }

// }


// for(var i=0;i<10;i++){
//     console.log("hello world");
    
// }

// for(var i=0;i<5;i++){
//     console.log("hello word"+i);
    
// }


// ensalzation , condation ,increment ya decrment deti ha for ka ander


// table..

// var num = prompt("enter a number", '6')
// for (var i=1;i<=10;i++){
//     console.log( num  + ' x' +' * ' + i + ' = ' + num*i);
    
// }



// for (var i=1;i<11;i++){
//     console.log('5 x ' + i + ' = ' + 5*i)
// }



// var cites =  ["karachi" , "lahore" , "punjab"];
// var city=prompt ("enter your city name", "karachi")
// var found =false;
// for(var i=0;i<cites.length;i++){
// if(city === cites [i]){

//     console.log(city + " found");
//     found = true;
//     break;

// }

// } if(!found){
//     console.log("not found")
// }
// note without if ka else nhi chal sakta




// peracties......

// for (var i = 0; i <5;i++ )
//     console.log(i);
    
/* for loop kisi kam ko bar bar repeat karne ke liye use hoti hai */





// var found = false ;

// var arr = [10,20,30,40]

// for (var i = 0 ; i < arr.length; i ++){
//     if (arr[i] === 43){
//         found = true;
//         break;
//     }
// }
// console.log(found);


// found ek flag hai


// var fruits = ["apple" , "banana", "mango",];
// console.log(fruits)



// break

// for (var i = 1; i <= 20; i++){
//     if(i === 12){
//         break
//     }
//     console.log(i);
    
// }



/* 1 se number print karna lakin jaise hi  i = 5 hota hai loop wahi ruk jata ha  */




// continue 

// for (var i = 0 ; i <= 20; i++){
//     if(i === 11 ){
//         continue
//     }
//     console.log(i)
// }

/* current loop iteration ko skip karta hai
loop band nhi hoti sirf aik value chhor kar next pert chala jata hai */





// ......chater 20 nested for loop ...........

/* nested for loop ka matlab hota hai for loop ke ander for loop
outer loop 1 dafa chalta hai 
inner loop poor complete hoti ha */


// for (var i = 1; i <= 5; i ++ ){  // outer loop
//     for (var j = 1; j <= 10; j++){ // inner loop
//         console.log(i + "x" + j + "=" + (i * j))
//     }
//     console.log("hello")
// }



// for (var i = 0; i < 3 ; i++){
//     for(var j = 0 ; j< 3; j++){
//         console.log("hello");
        
//     }
// }






// ..... chapter 21  changing case.......

// var checkstudent = prompt ("enter your name")
// var checkstudentwithCapitallLetter = checkstudent.toLowerCase()
// var student = ["Ali", "Ahmed", "Noor", "Bilal", "ibrahim"];
// for (var i = 0; i < student.length; i ++) {
//     if(student[i] == checkstudent){
//         console.log(checkstudent)
//     }
// }