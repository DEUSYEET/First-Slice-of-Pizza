export const pizza_app = `
<div id="thank"><h1>Thank You For Your Order</h1><h6>Click to close</h6></div>
<div id="prebuiltMenu">
            <div id="pre1" class="prebuiltButton">1</div>
            <div id="pre2" class="prebuiltButton">2</div>
            <div id="pre3" class="prebuiltButton">3</div>
            <div id="pre4" class="prebuiltButton">4</div>
            <div id="pre5" class="prebuiltButton">5</div>
            <div id="selfBuild" class="prebuiltButton">custom</div>
        </div>
        <div id="buildMenu">
            <canvas id="pizzaCanvas" width="600" height="600">
                Your browser does not support the HTML5 canvas tag.
            </canvas>
            <div id="summary">
                <h2 id="size"></h2>
                <div id="list"></div>
                <p id="total"></p>
            </div>
            <form id="sizes">
                <h2>Sizes</h2>
                <input for="sizes" id="Personal" name="size" class="sizeButton" type="radio" value="Personal" />
                <label for="Personal">Personal</label>
                <br />
                <input for="sizes" id="Medium" name="size" class="sizeButton" type="radio" value="Medium" />
                <label for="Medium">Medium</label>
                <br />
                <input for="sizes" id="Large" name="size" class="sizeButton" type="radio" value="Large" />
                <label for="Large">Large</label>
                <br />
                <input for="sizes" id="XLarge" name="size" class="sizeButton" type="radio" value="XLarge">
                <label for="XLarge">XLarge</label>
                <br />
            </form>
            <div id="toppings">
                <div id="meatToppings">
                    <h2 class="topHeaders">Meat</h2>
                    
                    <div>
                        <input id="Bacon" type="checkbox" class="checkboxTopping" value="Bacon">
                        <label class="checkboxLabel" for="Bacon">Bacon</label>

                        <br/>

                        <form class="selectionForm" value="Bacon">
                            <div>
                                <select class="toppingAmountSelector">
                                    <option value="regular">Regular</option>
                                    <option value="extra">Extra</option>
                                </select>
                            </div>
                            <br />
                            <div>
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Full.png" width="30" height="30"  alt="full" value="Bacon" />
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Left.png" width="30" height="30"  alt="left" value="Bacon" />
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Right.png" width="30" height="30" alt="right" value="Bacon" />
                            </div>
                        </form>
                    </div>


                    
                    <div>
                        <input id="Beef" type="checkbox" class="checkboxTopping" value="Beef">
                        <label class="checkboxLabel"  for="Beef">Beef</label>

                        <br/>

                        <form class="selectionForm" value="Beef">
                            <div>
                                <select class="toppingAmountSelector">
                                    <option value="regular">Regular</option>
                                    <option value="extra">Extra</option>
                                </select>
                            </div>
                            <br />
                            <div>
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Full.png" width="30" height="30"  alt="full" value="Beef" />
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Left.png" width="30" height="30"  alt="left" value="Beef" />
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Right.png" width="30" height="30" alt="right" value="Beef" />
                            </div>
                        </form>
                    </div>

                    <div>
                        <input id="Chicken" type="checkbox" class="checkboxTopping" value="Chicken">
                        <label class="checkboxLabel"  for="Chicken">Chicken</label>

                        <br/>

                        <form class="selectionForm" value="Chicken">
                            <div>
                                <select class="toppingAmountSelector">
                                    <option value="regular">Regular</option>
                                    <option value="extra">Extra</option>
                                </select>
                            </div>
                            <br />
                            <div>
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Full.png" width="30" height="30"  alt="full" value="Chicken" />
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Left.png" width="30" height="30"  alt="left" value="Chicken" />
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Right.png" width="30" height="30" alt="right" value="Chicken" />
                            </div>
                        </form>
                    </div>

                    <div>
                        <input id="Ham" type="checkbox" class="checkboxTopping" value="Ham">
                        <label class="checkboxLabel"  for="Ham">Ham</label>

                        <br/>

                        <form class="selectionForm" value="Ham">
                            <div>
                                <select class="toppingAmountSelector">
                                    <option value="regular">Regular</option>
                                    <option value="extra">Extra</option>
                                </select>
                            </div>
                            <br />
                            <div>
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Full.png" width="30" height="30"  alt="full" value="Ham" />
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Left.png" width="30" height="30"  alt="left" value="Ham" />
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Right.png" width="30" height="30" alt="right" value="Ham" />
                            </div>
                        </form>
                    </div>

                    <div>
                        <input id="ItalianSausage" type="checkbox" class="checkboxTopping" value="ItalianSausage">
                        <label class="checkboxLabel"  for="ItalianSausage">Italian Sausage</label>

                        <br/>

                        <form class="selectionForm" value="ItalianSausage">
                            <div>
                                <select class="toppingAmountSelector">
                                    <option value="regular">Regular</option>
                                    <option value="extra">Extra</option>
                                </select>
                            </div>
                            <br />
                            <div>
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Full.png" width="30" height="30"  alt="full" value="ItalianSausage" />
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Left.png" width="30" height="30"  alt="left" value="ItalianSausage" />
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Right.png" width="30" height="30" alt="right" value="ItalianSausage" />
                            </div>
                        </form>
                    </div>

                    <div>
                        <input id="Meatball" type="checkbox" class="checkboxTopping" value="Meatball">
                        <label class="checkboxLabel"  for="Meatball">Meatball</label>

                        <br/>

                        <form class="selectionForm" value="Meatball">
                            <div>
                                <select class="toppingAmountSelector">
                                    <option value="regular">Regular</option>
                                    <option value="extra">Extra</option>
                                </select>
                            </div>
                            <br />
                            <div>
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Full.png" width="30" height="30"  alt="full" value="Meatball" />
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Left.png" width="30" height="30"  alt="left" value="Meatball" />
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Right.png" width="30" height="30" alt="right" value="Meatball" />
                            </div>
                        </form>
                    </div>

                    <div>
                        <input id="Pepperoni" type="checkbox" class="checkboxTopping" value="Pepperoni">
                        <label class="checkboxLabel"  for="Pepperoni">Pepperoni</label>

                        <br/>

                        <form class="selectionForm" value="Pepperoni">
                            <div>
                                <select class="toppingAmountSelector">
                                    <option value="regular">Regular</option>
                                    <option value="extra">Extra</option>
                                </select>
                            </div>
                            <br />
                            <div>
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Full.png" width="30" height="30"  alt="full" value="Pepperoni" />
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Left.png" width="30" height="30"  alt="left" value="Pepperoni" />
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Right.png" width="30" height="30" alt="right" value="Pepperoni" />
                            </div>
                        </form>
                    </div>

                    <div>
                        <input id="Pork" type="checkbox" class="checkboxTopping" value="Pork">
                        <label class="checkboxLabel"  for="Pork">Pork</label>

                        <br/>

                        <form class="selectionForm" value="Pork">
                            <div>
                                <select class="toppingAmountSelector">
                                    <option value="regular">Regular</option>
                                    <option value="extra">Extra</option>
                                </select>
                            </div>
                            <br />
                            <div>
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Full.png" width="30" height="30"  alt="full" value="Pork" />
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Left.png" width="30" height="30"  alt="left" value="Pork" />
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Right.png" width="30" height="30" alt="right" value="Pork" />
                            </div>
                        </form>
                    </div>

                </div>
                <div id="veggiToppings">
                    <h2 class="topHeaders">Veggies</h2>
                    <div>
                        <input id="Spinach" type="checkbox" class="checkboxTopping" value="Spinach">
                        <label class="checkboxLabel"  for="Spinach">Spinach</label>

                        <br/>

                        <form class="selectionForm" value="Spinach">
                            <div>
                                <select class="toppingAmountSelector">
                                    <option value="regular">Regular</option>
                                    <option value="extra">Extra</option>
                                </select>
                            </div>
                            <br />
                            <div>
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Full.png" width="30" height="30"  alt="full" value="Spinach" />
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Left.png" width="30" height="30"  alt="left" value="Spinach" />
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Right.png" width="30" height="30" alt="right" value="Spinach" />
                            </div>
                        </form>
                    </div>

                    <div>
                        <input id="Mushroom" type="checkbox" class="checkboxTopping" value="Mushroom">
                        <label class="checkboxLabel"  for="Mushroom">Mushroom</label>

                        <br/>

                        <form class="selectionForm" value="Mushroom">
                            <div>
                                <select class="toppingAmountSelector">
                                    <option value="regular">Regular</option>
                                    <option value="extra">Extra</option>
                                </select>
                            </div>
                            <br />
                            <div>
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Full.png" width="30" height="30"  alt="full" value="Mushroom" />
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Left.png" width="30" height="30"  alt="left" value="Mushroom" />
                                <img class="sideIcon" src="ImagesPizza/sideIcons/Right.png" width="30" height="30" alt="right" value="Mushroom" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="orderButton">Order</div>
        </div>`;