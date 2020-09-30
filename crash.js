/*ar headtitle = document.getElementById("head");
console.log(headtitle);
//headtitle.innerText = "Checkout";
//headtitle.textContent = "don't leave me";
//innerHTML = "<h3>crip taste</h3>";
var header = document.getElementById("head");
header.style.backgroundColor = "coral";*/


/*var items = document.getElementsByClassName("list-group-items");
console.log(items);
console.log(items[2]);
items[2].style.backgroundColor = "coral";
//items.style.color = "red";
for(var i = 0; i < items.length; i++){
items[i].style.backgroundColor = "gray";
}*/

/*var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[2]);
li[2].style.backgroundColor = "coral";
//items.style.color = "red";
for(var i = 0; i < li.length; i++){
li[i].style.backgroundColor = "gray";
}*/

var header = document.querySelector("#head");
header.style.color ="#fff";

var input = document.querySelector("input");
input.value = "check me out";

var submit = document.querySelector('input[type="submit"]');
submit.style.borderRadius = "50%";

 
var list = document.querySelector(".list-group-items:nth-child(2)");
list.style.color = "coral";

var items = document.querySelector(".list-group-items:last-child");
items.style.color = "coral";

var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");
for(var i = 0; i < odd.length; i++){
odd[i].style.backgroundColor = "blue";
even[i].style.backgroundColor = "yellow";
}
//traversing the dom.
/*var itemlist = document.querySelector("#items");
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor = "coral";
console.log(itemlist.parentNode.parentNode.parentNode);*/

/*var itemlist = document.querySelector("#items");
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = "coral";
console.log(itemlist.parentElement.parentElement.parentElement)*/

/*var itemlist = document.querySelector("#items");
/*console.log(itemlist.children);
console.log(itemlist.children[2]);
itemlist.children[2].style.backgroundColor = "green";
console.log(itemlist.firstElementChild);*/
//console.log(itemlist.firstElementChild[3]);
//itemlist.firstElementChild[2].innerText = "check it out";
/*
var newDiv = document.createElement("div");
console.log(newDiv);
newDiv.className = "items";
newDiv.id = "items1";
newDiv.setAttribute("title", "learning Dom");

var newText = document.createTextNode("I'm finally writing vanilla javascript");
newDiv.appendChild(newText);

var container = document.querySelector("div .create");
var h3 = document.querySelector("div h3");
console.log(newDiv);
//container.insertBefore(newDiv, h3);*/




//var button = document.getElementById("pass");
//var headSide = document.getElementById("head");

//button.addEventListener("click", function(){
    //headSide.textContent = "change";
   // headSide.style.backgroundColor = "coral";
   // });

//function button(e){
   // console.log(e.target);
   //console.log(e.clientX);
//}

//var even =  document.getElementById("pass");
//var box =  document.getElementById("trep");

//box.addEventListener("mouseenter", runEvent);
//box.addEventListener("mouseleave", runEvent);

//box.addEventListener("mouseover", runEvent);
//box.addEventListener("mouseout", runEvent);
//even.addEventListener("mouseup", runEvent);
//var itemInput = document.querySelector('input[type="text"]');
//var form = document.querySelector('form');
//var trop = document.querySelector('select');

//trop.addEventListener('change', runEvent);

//itemInput.addEventListener('focus', runEvent);
//itemInput.addEventListener('blur', runEvent);

//function runEvent(e){
    //console.log("EVENT TYPE: "+e.type);
   //console.log(e.target.value);
    //document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
//}


   

