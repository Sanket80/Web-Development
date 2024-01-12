console.log("Hello World!")

// DOM - Document Object Model
// Nodes - Elements, Text, Comments, Attributes
console.log(document.body.childNodes);
// diff between childNodes and children is that childNodes will include text nodes
document.body.childNodes[1];
document.body.children[1];
console.log(document.body.childNodes[1].childNodes);

console.log(document.body.firstElementChild.children);
console.log(document.body.firstElementChild.children[1].nextElementSibling);
console.log(document.body.firstElementChild.children[1].previousElementSibling);

let cont = document.body.childNodes[1];
console.log(cont.firstChild);
console.log(cont.lastChild);
// firstElementChild will ignore text nodes
console.log(cont.childNodes);
console.log(cont.firstElementChild);
console.log(cont.lastElementChild);

cont.lastElementChild.style.backgroundColor = "red";

console.log(cont.parentElement);
console.log(cont.childNodes[1].childNodes);


// Selecting by IDs, Classes and Tags
let boxes = document.getElementsByClassName("box");
console.log(boxes);
console.log(boxes[2].style.backgroundColor = "purple");

// Selecting acc to ids , we use getElementById
let boxes2 = document.getElementById("yellow");
console.log(boxes2);
console.log(boxes2.style.backgroundColor = "yellow");

// Query Selector
// here it will select the first element with the class box
let boxes1 = document.querySelector(".box");
console.log(boxes1.style.backgroundColor = "orange");
console.log(document.querySelectorAll(".box"));
console.log(document.querySelector(".container").contains(document.querySelector(".box")));

// Selecting by Tags
// will select all the div tags
let boxes3 = document.getElementsByTagName("div");


// Inserting and Removing Elements

// diff between innerHTML and outerHTML is that innerHTML will only give the content inside the tag and outerHTML will give the content inside the tag along with the tag
console.log(document.querySelector(".box").innerHTML);
console.log(document.querySelector(".box").outerHTML);

// diff between innerText and textContent is that innerText will ignore the styling and textContent will include the styling
console.log(document.querySelector(".container").innerText);
console.log(document.querySelector(".container").textContent);
document.querySelector(".box").innerHTML = "<h1> Changed the context of box 1 </h1>";

console.log(document.querySelector(".box").attributes);
console.log(document.querySelector(".box").hasAttribute("class"));
console.log(document.querySelector(".box").getAttribute("class"));
// document.querySelector(".box").setAttribute("class", "box box-1");
document.querySelector(".box").removeAttribute("style");

// Creating Elements
let newDiv = document.createElement("div");
newDiv.innerHTML = "Created";
newDiv.setAttribute("class", "box box-4");
document.querySelector(".container").appendChild(newDiv);
document.querySelector(".container").before(newDiv);

console.log(document.querySelector(".box").remove());
console.log(document.querySelector(".box").remove());

// will add the class box-1 to the box
console.log(document.querySelector(".box").classList.add("box-1"));
// will remove the class box-1 from the box
console.log(document.querySelector(".box").classList.remove("box-1"));
// will toggle the class box-1 from the box
console.log(document.querySelector(".box").classList.toggle("box-1"));

// Events
let button = document.getElementById("btn");
button.addEventListener("click", function() {
    // alert("Button Clicked");
    document.querySelector(".box1").innerHTML = "<h2> Button Clicked </h2>";
});