var button = document.getElementById("enter");//get the element w/ the id=enter and assign it to the variable button
var input = document.getElementById("userinput");//get the element w/ the id=userinput and assign it to the variable input
var list1 = document.querySelector("ul");//query the element it tag name=ul and assign it the varible list1
var items_list1 = list1.querySelectorAll("span");// query all the elements within list1 w/ tag name= li
var bt_delete = document.getElementsByClassName("delete");
//this function create a new element and add it to the list list1(lu). Plus, this function refreshes the the items inside list1 
//this function is call back for listeners of "button" and "input" elements
function createListItem(){
    if(input.value != ""){
        var li = document.createElement("li");
        var bt = document.createElement("button");
        var sp = document.createElement("span");
        bt.appendChild(document.createTextNode("Delete"));
        sp.appendChild(document.createTextNode(input.value));
        bt.setAttribute("class", "delete");
        li.appendChild(sp);
        li.appendChild(bt)
        list1.appendChild(li);
        items_list1 = list1.querySelectorAll("li");
        input.value = "";
        refresh();
    }
}

//this function is call backed when the key enter(keycode=13) is pressed.
function keypressed(event){
    if(input.value != "" && event.keyCode === 13){// if the text input field cotains strings and the key pressed is enter, then create a new item
        createListItem();
    }
}

//this function is call back for the list items listeners and what this function does is to toggle the css class .done
function toggleDone() { 
    this.classList.toggle("done");
}

//As we started working with a no empty list and we don't want to add the item listeners manually, we created a function that
//adds the listeners automaticly through a for loop, this funtion is call when the page is loaded for the first time,
// and every time a new item is added to list1
function refresh(){
    for(let i=0; i<items_list1.length; i++){
        items_list1[i].addEventListener("click", toggleDone);
        bt_delete[i].addEventListener("click", alertfunc);
    }
}

function alertfunc(){
    alert("hola");
}

button.addEventListener("click", createListItem);
input.addEventListener("keypress", keypressed);
refresh();
// bt_delete[0].addEventListener("click", alertfunc);
