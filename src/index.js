import './style.scss';
import {pizza} from './pizza.js';
var toppingButtons = document.getElementsByClassName("toppingButton");

document.addEventListener('DOMContentLoaded', () => {
    for (let index = 0; index < toppingButtons.length; index++) {
        const element = toppingButtons[index];
        element.onclick = () => {
            addTopping(element)
        }
    }
})

const addTopping = (button) => {
    var value = button.attributes.value.nodeValue;
    // console.log(value);

    var testDiv = document.createElement("div");
    testDiv.innerHTML = "<img src=\""+pizza.toppings.Chicken.images.xlarge.left.regular+"\">"   
    document.getElementById("test").appendChild(testDiv);
    // console.log(pizza.toppings.Chicken.images.xlarge.left);
}