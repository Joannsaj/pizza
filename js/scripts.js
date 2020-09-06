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
        if (this.size === "large") {
            return 28000;
        } else if (this.size === "medium") {
            return 20000;
        } else {
            return 15000;
        }
    };

    Pizza.prototype.getCrustPrice = function () {
        if (this.size === "crispy") {
            return 3000;
        } else if (this.size === "stuffed") {
            return 5000;
        } else {
            return 4000;
        }
    };

    Pizza.prototype.getToppingPrice = function () {
        if (this.size === "large") {
            if (this.topping === "pepperoni") {
                return 4500;
            } else if (this.topping === "mushroom") {
                return 3000;
            } else if (this.topping === "onions") {
                return 1500;
            } else if (this.topping === "sausage") {
                return 3000;
            } else if (this.topping === "bacon") {
                return 4500;
            } else if (this.topping === "black olives") {
                return 4500;
            } else {
                return 1500;
            }
        } else if (this.size === "medium") {
            if (this.topping === "pepperoni") {
                return 4000;
            } else if (this.topping === "mushroom") {
                return 2800;
            } else if (this.topping === "onions") {
                return 1400;
            } else if (this.topping === "sausage") {
                return 2800;
            } else if (this.topping === "bacon") {
                return 4000;
            } else if (this.topping === "black olives") {
                return 4000;
            } else {
                return 1400;
            }
        } else {
            if (this.topping === "pepperoni") {
                return 3700;
            } else if (this.topping === "mushroom") {
                return 2500;
            } else if (this.topping === "onions") {
                return 1200;
            } else if (this.topping === "sausage") {
                return 2500;
            } else if (this.topping === "bacon") {
                return 3700;
            } else if (this.topping === "black olives") {
                return 3700;
            } else {
                return 1200;
            }
        }
    };









});