import "./style.scss";
import { pizza } from "./pizzaOBJ.js";
import { pizza_app } from "./pizza.js";


document.getElementById("pizza").innerHTML = pizza_app;

var prebuiltMenu = document.getElementById("prebuiltMenu");
var buildMenu = document.getElementById("buildMenu");
var sizeButtons = document.getElementsByClassName("sizeButton");
var thank = document.getElementById("thank");
var order = document.getElementById("orderButton");

var toppingAmountSelectors = document.getElementsByClassName(
  "toppingAmountSelector"
);
var checkboxToppings = document.getElementsByClassName("checkboxTopping");
var selectionForms = document.getElementsByClassName("selectionForm");
var sideIcons = document.getElementsByClassName("sideIcon");

var list = document.getElementById("list");
var total = document.getElementById("total");
var size = "Personal";
var amount = "regular";
var side = "full";

var toppingCount = 0;
var price = pizza.crusts[size].price;
document.getElementById("size").innerHTML = size;
total.innerHTML = `Total: $${price}`;

var c = document.getElementById("pizzaCanvas");
var ctx = c.getContext("2d");
var toppingsList = [
  "./ImagesPizza/PizzaSizes/Personal/Crust/CrustPersonal.webp",
  "./ImagesPizza/PizzaSizes/Personal/Crust/MarinaraPersonal.webp",
  "./ImagesPizza/PizzaSizes/Personal/Crust/CheesePersonal.webp",
];

// buildMenu.style.display = "none";
prebuiltMenu.style.display = "none";

document.addEventListener("DOMContentLoaded", () => {

  thank.addEventListener("click",()=>{
          buildMenu.style.display = "flex"
          thank.style.display = "none"

  })
  order.addEventListener("click",()=>{
    buildMenu.style.display = "none"
    thank.style.display = "block"
    setInterval(()=>{
      buildMenu.style.display = "flex"
      thank.style.display = "none"
    },3000)
})

  for (let index = 0; index < toppingAmountSelectors.length; index++) {
    const element = toppingAmountSelectors[index];
    const toppingElement = element.parentNode.parentNode.parentNode.childNodes.item(1);

    element.addEventListener("change", () => {
      changeAmount(element.options[element.selectedIndex]);
      addTopping(toppingElement.getAttribute("value"), toppingElement);
      addTopping(toppingElement.getAttribute("value"), toppingElement);
    });
  }

  for (let index = 0; index < selectionForms.length; index++) {
    const element = selectionForms[index];
    element.style.display = "none";
  }

  for (let index = 0; index < sideIcons.length; index++) {
    const element = sideIcons[index];
    const checkboxElement = element.parentNode.parentNode.parentNode.childNodes.item(
      1
    );
    element.addEventListener("click", () => {
      changeSide(element);
      addTopping(element.getAttribute("value"), checkboxElement);
    });
  }

  for (let index = 0; index < checkboxToppings.length; index++) {
    const element = checkboxToppings[index];
    const selectElement = element.parentNode.childNodes
      .item(7)
      .childNodes.item(1)
      .childNodes.item(1);

    element.addEventListener("change", () => {
    //   console.log(element.getAttribute("value"));
      if (element.checked) {
        changeAmount(selectElement.options[selectElement.selectedIndex]);
        side = "full";
        selectionForms[index].style.display = "flex";
        selectionForms[index].style.flexDirection = "column";
        addTopping(element.getAttribute("value"), element);
      } else {
        selectionForms[index].style.display = "none";
        addTopping(element.getAttribute("value"), element);
      }
    });
  }

  //size buttons
  for (let index = 0; index < sizeButtons.length; index++) {
    const element = sizeButtons[index];
    element.addEventListener("click", () => {
      changeSize(element);
    });
  }

  drawCanvas();
});

const addTopping = (topping, button) => {
  var image = pizza.toppings[topping].images[size][side][amount];
  console.log(button.classList)
  var toppingClass = button.classList;

  if (toppingClass.contains("selected")) {
    //remove
    toppingClass.remove("selected");
    list.innerHTML = list.innerHTML.replace(`<br>${pizza.toppings[topping].name}`, "");

    console.log(toppingCount)

    if (amount == "extra") {
      toppingCount -= 2;
    } else {
      toppingCount -= 1;
    }

    toppingsList.splice(toppingsList.indexOf(image), 1);
  } else {
    //add
    toppingClass.add("selected");
    list.innerHTML = list.innerHTML.concat(`<br>${pizza.toppings[topping].name}`);
    toppingsList.push(image);
    
    console.log(toppingCount, amount)


    if (amount == "extra") {
      toppingCount += 2;
    } else {
      toppingCount += 1;
    }
  }
  // console.log(toppingsList);
  changePrice();
  drawCanvas();
};

const changeSide = (element) => {
  side = element.getAttribute("alt");
};

const changeAmount = (element) => {
  amount = element.getAttribute("value");
};

const changeSize = (button) => {
  var sizeVal = button.attributes.value.nodeValue;

  toppingsList.splice(0, toppingsList.length);
  list.innerHTML = "";
  size = sizeVal;
  toppingsList.unshift(pizza.crusts[size].cheese);
  toppingsList.unshift(pizza.crusts[size].sauce);
  toppingsList.unshift(pizza.crusts[size].crust);
  document.getElementById("size").innerHTML = size;
  changePrice();
  drawCanvas();
};

const drawCanvas = () => {
  ctx.clearRect(0, 0, 10000, 10000);
  var i = 0;

  toppingsList.forEach((element) => {
    setInterval(draw(element), 1000);
    // draw(element);
  });
};

const draw = (element) => {
  var img = document.createElement("IMG");
  img.src = element;
  img.style.display = "none";
  document.getElementById("pizza").appendChild(img);
  img.onload = () => {
    var x = c.width / 2 - img.width / 2;
    var y = c.height / 2 - img.height / 2;
    var width = img.width;
    var height = img.height;

    ctx.drawImage(img, x, y, width, height);
  };
  document.getElementById("pizza").removeChild(img);
};

const changePrice = () => {
  price = pizza.crusts[size].price;
  var specialDeal = "";
  if (toppingCount >= 2 && toppingCount <= 4) {
    price += toppingCount-1;

    specialDeal = "";
  } else if (toppingCount >= 5) {
    price += 3 + (toppingCount - 5);
    specialDeal = "<h3>5 Toppings for $3 Deal!</h3>";
  }

  document.getElementById("total").innerHTML =
    "Price: $" + price + specialDeal;
};
