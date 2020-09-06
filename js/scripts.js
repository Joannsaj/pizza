$(document).ready(function () {
    function Pizza(size, topping, crust) {
        this.size = size;
        this.topping = topping;
        this.crust = crust;
    }

    Pizza.prototype.getPizzaPrice = function () {
        return this.getCrustPrice() + this.getToppingPrice() + this.getSizePrice();
    };













})