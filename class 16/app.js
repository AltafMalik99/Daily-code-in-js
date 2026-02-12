// function getvalue(){
//     var p = document.getElementById("name")
//     console.log(p.value);
    
// }


/* is ma (.value) input box ke ander jo likha hota hai wo uthata hai 
jo input ma value likho gya wo console ma show ho gya*/


// Reading field values.....


// function getvalue (){
//     var name = document.getElementById("username")
//         alert(name);
//     }



// function username(){
//     var p = document.getElementById("name")
//     alert(p.value)
// }



// function login(){
//     var u = document.getElementById("user").value
//      var p = document.getElementById("pass").value
//       var e = document.getElementById("email").value


// if(u === "abc" && p === "123" && e === "abc@gmail.com"){

//     alert("login sucessful ✅")
// }else{
//     alert("wrong ❌")
// }

// }





// function check(){
//     var e = document.getElementById("email").value;

//     if(e === ""){
//         alert("please email in the complete fill")
//     }

// }



// function check(){
//     var e = document.getElementById("email").value

//     if(e === ""){
//         alert("empty emial")
//     }
// }




// function checkCampus() {
//     var roll = document.getElementById("rollnumber").value
//     var campus ;

//     switch (roll) {
//         case "10":
//             campus = "zatioon ashrif"
//             break;

//         case "20":
//             campus ="gulshan campus"

//             break

//         case "30":
//             campus = "zamzam campus"

//             break

//         default:
//             alert("your are not inroll in smit")
//             break;
//     }

//      document.getElementById("campus").value = campus

// }







// <!-- chapter 51.. Reading and setting paragraph text -->

/* paragraph ka text read karna jo likha ha usay lena
paragraph ka text set karna naya text delan */

// innerhtml
// html tags allow karta

// innertext
// sirf text 


// var a = document.getElementById("para").innerText = "this is a ball"
// console.log(a);

// function showpara(){
//     var p = document.getElementById("pare").innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
//     // console.log(p);

// }


// function renderList(){

//     var orderlist = document.getElementById("list");
//     var list = "<li>item </li><li>item </li><li>item </li><li>item </li>"

// orderlist.innerHTML = list;
// }


// function renderList (){
//     var orderlist = document.getElementById("list");
// var list =  "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwuNo8HsyQgmYdB47lG6jozFQ_IS-tp_-0w&s' alt='' width='300'>"


// orderlist.innerHTML = list
// }


//  text = document.getElementById("para").innerText;
// alert(text)


// function change(){
// document.getElementById("para").innerText = "this is a ball";
// }





// function update(){
//     var x = document.getElementById("para").innerText
//     document.getElementById("para").innerText = x + " student ";
// }

// button click purana read + naya add


// chapter 52 Manipulating images and text



// function invisible (){
//     var img = document.getElementById("img")
//     console.log("list=>" ,img);
    
// }



// function invisible(){
//     var img = document.getElementById("img");
//     img.classList.add("hide")
//     console.log(img);
    
// }



// function invisible(){
//     var img = document.getElementById("img").style.border="5px solid red"
//     // img.style.display= "none"
//     // img.style.border="10px"
//     console.log(img);
    
// }


// function change (){
//  var b =   document.getElementById("img1").src = "https://toyishland.com/wp-content/uploads/2022/10/01.webp"
//     console.log(b);
    

// }



// function change (){
//     var img = document.getElementById("img").src = "https://toyishland.com/wp-content/uploads/2022/10/01.webp"

// }


// function change (){
//     var image = document.getElementById("text").innerText = "Altfa"
//     console.log(image);
    
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



// var images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE9ctAOD2dvuM6RpVfCK76PdQNoBcmt6ygqA&s","https://cdn.shopify.com/s/files/1/0278/9159/7379/files/suzuki-gsx-r1000-right-side-viewfull-image-901174_600x600.webp?v=1685527096","https://cdn11.bigcommerce.com/s-r5k51kqrix/images/stencil/728x728/products/3021/10328/roadway-r750-electric-bike__49608.1726741120.jpg?c=1"]
// var index = 0;

// function changeimg (){
//     index ++
//     if(index >= images.length){
//         index = 0
//     }
//     document.getElementById("img1").src = images[index]
// }



// function ch(){
//     document.getElementById("img").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqT6wVOAq7Runazz0KnwjcwDAnBgB5Xg_-OA&s"
// }




















