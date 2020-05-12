import './style.scss';
import {
    pizza
} from './pizza.js';
var toppingButtons = document.getElementsByClassName("innerAmountButton");
var sizeButtons = document.getElementsByClassName("sizeButton");
var size = "personal"
document.getElementById("size").innerHTML = size;

var c = document.getElementById("pizzaCanvas");
var ctx = c.getContext("2d");
var toppingsList = ["./ImagesPizza/PizzaSizes/Personal/Crust/CrustPersonal.webp", "./ImagesPizza/PizzaSizes/Personal/Crust/MarinaraPersonal.webp", "./ImagesPizza/PizzaSizes/Personal/Crust/CheesePersonal.webp"];



document.addEventListener('DOMContentLoaded', () => {
    //topping buttons
    for (let index = 0; index < toppingButtons.length; index++) {
        const element = toppingButtons[index];
        element.addEventListener("click", ()=>{
            addTopping(element);
        })
    }

    //size buttons
    for (let index = 0; index < sizeButtons.length; index++) {
        const element = sizeButtons[index];
        element.addEventListener("click",() => {
            changeSize(element);
        })
    }

    drawCanvas();
})

const addTopping = (button) => {
    var topping = button.parentNode.parentNode.attributes.value.nodeValue;
    var side = button.parentNode.attributes.value.nodeValue;
    var amount = button.attributes.value.nodeValue;
    var image = pizza.toppings[topping].images[size][side][amount]

    if (button.classList.contains('selected')) {
        //remove
        button.classList.remove('selected')
        document.getElementById("list").innerHTML = document.getElementById("list").innerHTML.replace("<br>" + pizza.toppings[topping].name + " " + side + " " + amount, "");
        var i =  toppingsList.findIndex((val,index,arr)=>{
            return val === image;
        })
        toppingsList.splice(i,1);
    } else {
        //add 
        button.classList.add('selected');
        document.getElementById("list").innerHTML = document.getElementById("list").innerHTML.concat("<br>" + pizza.toppings[topping].name + " " + side + " " + amount);
        toppingsList.push(image);
    }

    drawCanvas();
}

const changeSize = (button) => {
    var sizeVal = button.attributes.value.nodeValue;
    toppingsList.splice(0,3);
    size = sizeVal;
    toppingsList.unshift(pizza.crusts[size].cheese);
    toppingsList.unshift(pizza.crusts[size].sauce);
    toppingsList.unshift(pizza.crusts[size].crust);
    document.getElementById("size").innerHTML = size;
    drawCanvas();
}


const drawCanvas = () => {
    ctx.clearRect(0,0,10000,10000)
    toppingsList.forEach(element => {
        draw(element);
    });
    console.log(toppingsList);
}
const draw = element => {
    var img = document.createElement('IMG');
    img.src = element;
    img.style.display = "none";
    document.getElementById('pizza').appendChild(img)
    img.onload = () => {
        ctx.drawImage(img,0,0);
    }
    document.getElementById('pizza').removeChild(img);
}