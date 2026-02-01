// chapter 58 The Dom........... 

// introduction in Dom

// Document objact model

/* html ko js ke through control karna Dom hai
browser jab html load karta ha to html ko tree stucture bana deta ha
har tag = objact / node
har element js ma objact hai */


// function chtext(){
//     document.getElementById('dom').innerText = 'text change'
// }

// function chtext(){
//     console.log(document);
    
// }


// function chtext(){
//  var p = document.childNodes[1].childNodes[2].childNodes[1]
//  console.log(p);

// }


// function chtext(){
//  var p = document.children[0].children[1].children[2]
//  console.log(p);
//  p.innerHTML = "hello"

// }




// chapter 59... The DOM: Parents and children

/* dom asal ma html ka tree structure hoti hai upar wala parent neeche wala children */


// <div id="box">
//   <h1>Hello</h1>
//   <p>Welcome</p>
// </div>


// div (parent)
//  ├── h1 (child)
//  └── p  (child)



// function check(){
//     var p = document.getElementById("box");
//     console.log(p.children);
 
    
//     var child = p.children[0];
//     console.log(child.parentElement)

// }
 

// function test(){
//   var parent = document.getElementById("list");

//   console.log(parent.firstElementChild); // Apple
//   console.log(parent.lastElementChild);  // Mango

//   parent.firstElementChild.style.color = "red";
// }



// function test(){
//     var parent = document.getElementById("list");
    
//     console.log(parent.firstElementChild);
//     console.log(parent.lastElementChild);

// parent.firstElementChild.style.color = "red"
// parent.lastElementChild.style.color = "yellow"
    
// }


// The DOM: Finding children

/* dom (document object model) browser ka bana hua system hoti hai
jo html ko js ka sath connect karta hai */

/*Dom js ko power deta hai ke wo html ko dekha samajh aur change kar sakay */


// var parent = document.getElementById('para');
// console.log(parent.children);
// parent.children[0].style.color = "blue"
// parent.lastElementChild.style.background = "green";


// var box = document.getElementById("box");
// console.log(box.children);

// box.children[2].onclick = function(){
//     box.children[1].style.color = "red"
// }



// function chcolor(){
//     var p = document.getElementsByTagName("p")
//     p[0].style.color = "red"
// }


// function styleAll(){
//     var p = document.getElementsByTagName('p')
//     p[0].style.color = 'red'
// }


// var list = document.getElementById("list");
// list.children[1].style.background = "yellow"
// list.children[1].style.display = "inline"


// function ch (){
//     var p = document.getElementsByTagName("li")
//     p[0].style.backgroundColor = "yellow"
//         p[1].style.backgroundColor = "yellow"
//             p[0].style.backgroundColor = "red"
//               p[2].style.backgroundColor = "blue"
//             p[0].style.display = "inline"
//                 p[1].style.display = "inline"
//                     p[2].style.display = "inline"
// }


