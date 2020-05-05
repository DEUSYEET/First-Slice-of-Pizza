import './style.scss';
import {
    pizza
} from './pizza.js';
var toppingButtons = document.getElementsByClassName("innerAmountButton");
var sizeButtons = document.getElementsByClassName("sizeButton");
var size = "personal"
document.getElementById("size").innerHTML = size;


document.addEventListener('DOMContentLoaded', () => {
    for (let index = 0; index < toppingButtons.length; index++) {
        const element = toppingButtons[index];
        element.onclick = () => {
            addTopping(element)
        }
    }
    for (let index = 0; index < sizeButtons.length; index++) {
        const element = sizeButtons[index];
        element.onclick = () => {
            changeSize(element);
            
        }
    }
})

const addTopping = (button) => {
    var topping = button.parentNode.parentNode.attributes.value.nodeValue;
    var side = button.parentNode.attributes.value.nodeValue;
    var amount = button.attributes.value.nodeValue;
    var image = pizza.toppings[topping].images[size][side][amount]
    
    if (button.classList.contains('selected')){
        button.classList.remove('selected')
        document.getElementById("list").innerHTML = document.getElementById("list").innerHTML.replace("<br>" + pizza.toppings[topping].name + " " + side + " " + amount, "");
    }else{   
        button.classList.add('selected');
        document.getElementById("list").innerHTML = document.getElementById("list").innerHTML.concat("<br>" + pizza.toppings[topping].name + " " + side + " " + amount);
        document.getElementById("test").innerHTML = "<img src=\"" + image + "\">"
    }
}

const changeSize = (button) => {
    var sizeVal = button.attributes.value.nodeValue;
    size = sizeVal;
    document.getElementById("size").innerHTML = size;
}