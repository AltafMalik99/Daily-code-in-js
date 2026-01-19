// var i = 10;

// while (i>1){
//     i--
//     console.log(i);
// }

/* while loop ak aisa loop hai jo
jab tak condition true ho code repeat karta hai */

// is ki ek example ya hai jab user password corract de gay to chale jay gay
// lakin agar user incorract password de gya to loop bar bar chaleta jay gya


// var corractPin = "123"
// var userInput = prompt ("enter a corract pin")

// while (corractPin !== userInput){
//     userInput = prompt ("wrong incorract pin","please enter a  corract pin")
// }

// console.log("corract pin");



// var i = 10;

// do{
//         i--              // or is line ma 0 se 9 tak
//     console.log(i);
//                // agar is line i ko 10 mile gay 0 se 10
// }while(i >0)


// ....chapter 45 Events: link......

// function print (name){
//     console.log("Hello Altaf "+ name);
    
// }



// chapter 46..... Events: button


/* jab user input box me type karta hai ya click karta hai
tab js koi action karta hai */


// function print(name){
//     console.log("hello"+ name);
    
// }


// chapter 48... Events fields


// function forInput(){
//     console.log("hello foues");
    
// }

// function print (){
//     console.log("onbluer")
// }




// chapter 49.... Reading field values:

/* html input fileds textbox password email se user ka data js ma lena*/


// function getvalue(){

//     var inputs = document.getElementById("inputs");

//     console.log(inputs.value);
    
// }


// function getvalue (){
//     var name = document.getElementById("username").value;
//     console.log("user name is "+name);
    
// }

// function getvalue (){
//     var name = document.getElementById("username").value
//     console.log("this code is run "+name);
    
// }

// function checkpass(){
//     var userpass = document.getElementById("pass").value;
//     if(userpass === "1234"){
//         console.log("corract password");
        
// }
// else {
//     console.log("incorract password")
// }
// }

// function showcite(){
//     var selectcity = document.getElementById("cite").value
// console.log("this cite"+ selectcity);

// }


// .......chapter.... 50 setting field values

// js se html ma input field ke ander value dalna
// js ke through input box dropdown ma vlue set kar saktay ho


// setvalue...

// function setvalue(){
//  var name =   document.getElementById("input").value = "Altaf"
// console.log("this answer "+name);

// }

// ab jab button click hoga input box ma Altf likha hua ayega



// function getvalue(){
//     var name = document.getElementById("input")
//     console.log(input.value);
// }

// function setvalue(){
//     var name = document.getElementById("input")
//     name.value = "Altaf"
// }



// function getvalue(){
//     var name = document.getElementById("input")
//     console.log(name.value);
//    input.style.backgroundColor="lightblue";
// }

// function setvalue(){
//     var name = document.getElementById("input")
//     name.value = "Altaf"
//     input.style.backgroundColor="red";
// }

// function bgred(){
//     var input=document.getElementById("input")
//     // input.style.backgroundColor="red";
//     input.style.backgroundColor="yellow";
// }



// function getvalue(){
//     var name = document.getElementById("input")
//     console.log(name.value);
//     input.style.backgroundColor="lightblue"
// }


// function setvalue(){
//     var name = document.getElementById("input")
//     name.value = "Altaf"
//     input.style.borderColor="yellow"
// }

// function rgcolor(){
//     var input = document.getElementById("input")
//     input.style.backgroundColor="yellow"
// }


// function changeImage(){
//     var  image = document.getElementById("image")
//     image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEztWzkKFIsUSBZXPogyev7vXYjESPaYM-SQ&s"
// }


// multipul image changeing ...

// var image = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8eSlOknnyXQuzqLgkBOoCPWZH2eJ_WF4JrQ&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYa68a31TXuBjQgYWVlKcE9wSPNrf5Sg6fzw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdEGYifWRRf0xQYTmpAf-zOvODFEZrXjUcpg&s"]

// var index = 0

// function changeimg(){
//     index++;
//     if(index >= image.length){

//         index = 0
//     }
//     document.getElementById("myimage").src = image[index]

// }

// var image = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFZaLvVB6UsW9zQuai9iJ6LKEcaHYxBkebSA&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdEGYifWRRf0xQYTmpAf-zOvODFEZrXjUcpg&s","https://gtacars.ae/wp-content/uploads/2024/10/LEVA-GTA-Cars-JD-Urus-7-copy-scaled.jpg"]
// var index = 0;

// function changeimg (){
//     index++
//     if(index >= image.length){
//         index = 0;
//     }
//     document.getElementById("img").src = image[index]
// }


// var images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSspgd0xnBLQET7oyFsjWuOhg04RNdqUmnZMw&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYa68a31TXuBjQgYWVlKcE9wSPNrf5Sg6fzw&s",];
// var index = 0;

// function changeImage() {
//     index++;
//     if (index >= images.length) {
//         index = 0;
//     }
//     document.getElementById("myImage").src = images[index];
// }



// var image = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWRd-0-oMT-Vb2aKJVwwpA73-p_AjYu_RFJw&s","https://cache4.pakwheels.com/system/car_generation_pictures/8676/original/Cover.jpg?1744875096"]
// var index = 0;

// function changeimg (){
//     index ++;
//     if(index >= image.length){
//         index = 0;
//     }
//     document.getElementById("myimg").src = image[index]
// }



// video 36