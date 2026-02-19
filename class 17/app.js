// chapter 53 swapping images 

/* do ya zyada images ke position / src ko ek duser ke sath replace karna
images 1 aur images 2 hai button 1 ki jagah images 2 ajaye aur  */


// function swap(){
//     var images = document.getElementById("img").src
//     var images = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqT6wVOAq7Runazz0KnwjcwDAnBgB5Xg_-OA&s"
//     console.log("img=>", images);
    
// }


// function swap(){
//     var image = document.getElementById("img").src
//     var images = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMYbuRL6QtxrQKZI1XV1JXknUIUxJiCsmiw&s"
//     console.log(images);
    
    
// }


// is na ma image updata kar dey


// function swap(img,imgsrc){
//     var images = document.getElementById("img").src = imgsrc
//     console.log("img=>", images);
    
// }


// function swap(){
//     var a = document.getElementById("img1").src;
//     document.getElementById("img1").src = document.getElementById("img2").src;
//     document.getElementById("img2").src = a;
//     console.log(a);
    
// }



// function sawp(imageid){
//     var images = document.getElementById(imageid).src = imageid
//     console.log("pic+>" ,images);
    
// }



/*is ma .src ka kam ha images ka source url set ya read karna ke liye hoti hai 
.src ka  kam ha image ko change karna ya current images ka url dekhan hai */



// function swap(imgId, newSrc){
//    var newimg = document.getElementById(imgId).src = newSrc;
//     console.log("Image changed to:", newimg);
// }


// function changeimg(){
//     var img = document.getElementById("img")
//     console.log("this img",img);
    
// }


// ...............

// function changeimg(){
//     var img = document.getElementById("img")
//     console.log("this img",img);
    
// }

// function changeimg (){
//     var address = document.getElementById("imglink")
//     var address = address.href
//     console.log(address)
// }



// function big(){
//     var para = document.getElementById('para')
//     para.className += " size"
//     console.log("para",para)
// }



// function big(){
//     var para = document.getElementById('para').style.
//     fontSize='50px'
//     // para.className += " size"
//     console.log("para",para)
// }

// function changeimg (){
//     var address = document.getElementById("imglink")
//     var address = "https://google.com"
//     console.log(address)
// }




// function divpara(event){
//     console.log("div=>",event.target);
//     event.target.style.backgroundColor = 'red'
//     event.target.style.color = "yellow"
//     event.target.style.fontSize = "30px"
    
// }


// function divpara (event){

//     var para = document.getElementsByTagName('div')
// var ch = para[0].textContent
//     console.log(ch);

// }



// var div = document.getElementsByTagName('div')
// var para = div[0].getElementsByTagName('p')
// console.log("para=>" ,para);


// var div = document.getElementById('para')
// div.onclick = function(){
//     console.log("div",div);
    
// }



// var div = document.querySelector('div')
// div.addEventListener('click', function () {
//     console.log(div);
// })


// var div = document.querySelector('div')
// div.addEventListener('mouseover', function(){
//     console.log("chal gay ha", div);
    
// })


// chapter 54 sawapping imges and setting classes

/*  ek images ko click event per doosri images se change kar dena */


// function swap(){
//    var pic = document.getElementById('pic').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw2dAVNmBhqVvNPAs7LJHnumSH3pHdoWP0bg&s"
//     console.log("pic=>" , pic);
    
// }


// function swap(imgid, imgsrc){
//     var pic = document.getElementById(imgid);pic.src = imgsrc;
//     console.log(pic.src);
// }


// function swap(imgid,newSrc){
//     var pic = document.getElementById(imgid);pic.src = newSrc;
//     console.log(pic.src);
    
// }


// chapter 56... Target all elements by tag name

/* agar ek tag ka name likha do to us tag ke jitne bhi element hon ge sab per style lag jayega */

// function styleAll(){
//     var p = document.getElementsByTagName("p");

//     for(var i =0;i<p.length; i++){
//         p[i].style.color = 'red'
//     }
// }



// function styleAll(){
//     var p = document.getElementsByTagName('p');

// for (i=0;i<p.length;i++){
//     p[i].style.color = "pink"
// }
// }


// chapter 57... Target some elements by tag name

/* web page per aksar ek ha tag ke bohot se element hotay hai 
lakin har dafa humein sab element per kaam nhi karna hota */



// function styleAll(){
//     var p = document.getElementsByTagName('p')
//     p[0].style.color = 'red'
// }


// function styleAll(){
    //     var p = document.getElementsByTagName('p')
    //     p[0].style.color = 'red'
    // p[p.length -1].style.color = 'yellow'
// }

// function styleAll(){
//     var p = document.getElementsByTagName('p')
//     p[0].style.color = 'red'
//       p[1].style.color = 'blue'
//           p[2].style.color = 'yellow'
//               p[3].style.color = 'lightgreen'

//     p[p.length - 1].style.color = 'blue'
// }


