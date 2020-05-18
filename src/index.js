import './style.scss';
import {
    pizza
} from './pizza.js';

var prebuiltMenu = document.getElementById("prebuiltMenu")
var buildMenu  = document.getElementById("buildMenu");
var toppingButtons = document.getElementsByClassName("innerAmountButton");
var sizeButtons = document.getElementsByClassName("sizeButton");
var size = "personal"
document.getElementById("size").innerHTML = size;

var c = document.getElementById("pizzaCanvas");
var ctx = c.getContext("2d");
var toppingsList = ["./ImagesPizza/PizzaSizes/Personal/Crust/CrustPersonal.webp", "./ImagesPizza/PizzaSizes/Personal/Crust/MarinaraPersonal.webp", "./ImagesPizza/PizzaSizes/Personal/Crust/CheesePersonal.webp"];

// buildMenu.style.display = "none";
prebuiltMenu.style.display = "none";

document.addEventListener('DOMContentLoaded', () => {
    //topping buttons
    for (let index = 0; index < toppingButtons.length; index++) {
        const element = toppingButtons[index];
        element.addEventListener("click", () => {
            addTopping(element);
        })
    }

    //size buttons
    for (let index = 0; index < sizeButtons.length; index++) {
        const element = sizeButtons[index];
        element.addEventListener("click", () => {
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
        var i = toppingsList.findIndex((val, index, arr) => {
            return val === image;
        })
        toppingsList.splice(i, 1);
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
    toppingsList.splice(0, toppingsList.length);
    document.getElementById("list").innerHTML = ""
    size = sizeVal;
    toppingsList.unshift(pizza.crusts[size].cheese);
    toppingsList.unshift(pizza.crusts[size].sauce);
    toppingsList.unshift(pizza.crusts[size].crust);
    document.getElementById("size").innerHTML = size;
    drawCanvas();
}


const drawCanvas = () => {
    ctx.clearRect(0, 0, 10000, 10000)
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
        var x = c.width / 2 - img.width / 2;
        var y = c.height / 2 - img.height / 2;
        var startX = 0;
        var startY = 0;
        var width = img.width;
        var clippedWidth = img.width / 2;
        var height = img.height;



        if (element.includes("Right")) {
            ctx.drawImage(img, c.width - img.width, 0);
        } else if (element.includes("Left")) {
            ctx.drawImage(img, 0, 0);
        } else {
            // ctx.drawImage(img, startX, startY, clippedWidth, height, x, y, width, height);
            ctx.drawImage(img, x, y, width, height);
        }

        // ctx.strokeStyle = '#f00';
        // ctx.lineWidth = 2;
        // ctx.beginPath()
        // ctx.rect(x, y, width, height);
        // ctx.stroke();
    }
    document.getElementById('pizza').removeChild(img);
}