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










});