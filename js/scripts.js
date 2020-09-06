$(document).ready(function () {
    function Pizza(size, topping, crust) {
        this.size = size;
        this.topping = topping;
        this.crust = crust;
    }

    Pizza.prototype.getPizzaPrice = function () {
        return this.getSizePrice() + this.getToppingPrice() + this.getCrustPrice();
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












})