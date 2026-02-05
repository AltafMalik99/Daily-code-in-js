// chapter 61 The Dom junk artifacts and node Type ..

/* Dom jab html ko read karta hai to har cheez ko node bana deta ha sarif tags hi nhi
is wajah se kuchi extra / unwanted nodes ban jate hai jinhein hum junk artifacts kehte hai */

// node 
/* har extra text nodes hi junk artifacts hoti hai */

// Element.children
// children sirf html element deta hai junk text nodes nhi


// NodeTypes kay hoti hai
/* har dom node ka ek type number hoti hai jisse pata chalta hai ke node kis type ka hai */


// var p = document.getElementById('para')
// // console.log(p.nodeName);
// console.log(p.firstChild.nodeType);


// jo funcation kisi objact ka ander bana ho usko methode kehte hai

// projact..



var fontSize = 16;
function minas() {
    if (fontSize > 8) {


        var allParas = document.
            getElementsByTagName("p")
        fontSize -= 2

        for (i = 0; i < allParas.length; i++)
            allParas[i].style.fontSize = fontSize + "px"
    }
}



function plus() {
    console.log("buttion click");

    if (fontSize < 30) {

        var allParas = document
            .getElementsByTagName("p")

        fontSize += 2;

        for (i = 0; i < allParas.length; i++) {
            allParas[i].style.fontSize = fontSize + "px"
        }
    }
}



function para(){
    document.getElementById("para").style.backgroundColor = "red"
}



function ball(){
    document.getElementsByTagName('div')
    [0].style.borderRadius = "50%"
 
    document.getElementsByTagName('div')
    [0].style.transform = "translateX(100PX)"
   
}

//  var p = document.getElementsByTagName('div')[0].nextElementSibling.parentElement
// console.log(p);


// var p = document.getElementsByTagName("ul")[0].childNodes
var p = document.getElementsByTagName("li")[0].childNodes
console.log(p);


// video 28

// Note
/* jab humein kisi khaas specific tag name ke taman element chahiye hon to
hum document.getElementByTagName use karta hai
yeh hamesha humein HTMLCollection return karta hai
jo dekhne ma array jaise hoti ha lekin asal ma array nhi hoti  */