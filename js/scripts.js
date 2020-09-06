$(document).ready(function () {
    function Pizza(size, topping, crust) {
        this.size = size;
        this.topping = topping;
        this.crust = crust;
    }

    Pizza.prototype.getPizzaPrice = function () {
        return this.getSizePrice() + this.getCrustPrice() + this.getToppingPrice();
    };

    Pizza.prototype.getSizePrice = function () {
        if (this.size == "large") {
            return 28000;
        } else if (this.size == "medium") {
            return 20000;
        } else {
            return 15000;
        }
    };

    Pizza.prototype.getCrustPrice = function () {
        if (this.size == "crispy") {
            return 3000;
        } else if (this.size == "stuffed") {
            return 5000;
        } else {
            return 4000;
        }
    };

    Pizza.prototype.getToppingPrice = function () {
        if (this.size == "large") {
            if (this.topping == "pepperoni") {
                return 4500;
            } else if (this.topping == "mushroom") {
                return 3000;
            } else if (this.topping == "onions") {
                return 1500;
            } else if (this.topping == "sausage") {
                return 3000;
            } else if (this.topping == "bacon") {
                return 4500;
            } else if (this.topping == "black olives") {
                return 4500;
            } else if (this.topping == "green peppers") {
                return 2500;
            } else {
                return 1500;
            }
        } else if (this.size == "medium") {
            if (this.topping == "pepperoni") {
                return 4000;
            } else if (this.topping == "mushroom") {
                return 2800;
            } else if (this.topping == "onions") {
                return 1400;
            } else if (this.topping == "sausage") {
                return 2800;
            } else if (this.topping == "bacon") {
                return 4000;
            } else if (this.topping == "black olives") {
                return 4000;
            } else if (this.topping == "green peppers") {
                return 3700;
            } else {
                return 1400;
            }
        } else {
            if (this.topping == "pepperoni") {
                return 3700;
            } else if (this.topping == "mushroom") {
                return 2500;
            } else if (this.topping == "onions") {
                return 1200;
            } else if (this.topping == "sausage") {
                return 2500;
            } else if (this.topping == "bacon") {
                return 3700;
            } else if (this.topping == "black olives") {
                return 3700;
            } else if (this.topping == "green peppers") {
                return 3700;
            } else {
                return 1200;
            }
        }
    };
    var totalCost = 0;
    var pizzasOrdered = [];
    $("#pizza-form").submit(function (event) {
        event.preventDefault();
        var sizeSelected = $(this).find("#size").val();
        var toppingSelected = $(this).find("#topping").val();
        var crustSelected = $(this).find("#crust").val();

        var newPizza = new Pizza(sizeSelected, toppingSelected, crustSelected);
        pizzasOrdered.push(newPizza);

        $("#size").val("");
        $("#topping").val("");
        $("#crust").val("");

        totalCost = 0;

        for (let i = 0; i < pizzasOrdered.length; i++) {
            totalCost += pizzasOrdered[i].getPizzaPrice();
        }
        console.log(totalCost);
        alert("Your order for a" + " " + newPizza.size + " " + "pizza with" + " " + newPizza.topping + " " + "toppings and a" + newPizza.crust + " " + "crust, has been received. Your bill is UGX" + " " + totalCost);
        $(".deliver").show();
    });
    $("#continue").click(function () {
        $(".hide").show();
    });
    $(".address").submit(function (event) {
        event.preventDefault();
        var name = $("#new-name").val();
        var street = $(".new-street").val();
        var city = $(".new-city").val();
        var phone = $("#phone").val();
        totalCost += 10000;
        alert(name + ": Your total bill is UGX. " + totalCost + ". Your order will be delivered to " + city + ", " + street + " in the next 2 hours" + " " + "We shall call you on" + " " + phone + " " + "to confirm our arrival.");
    });





});