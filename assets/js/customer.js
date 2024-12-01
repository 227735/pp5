"use strict";
function Customer() {
    this.companyName = function () {
        return "XYZ";
    };
    this.nip = function () {
        return "54636456456";
    };
    this.city = function () {
        return "Kraków";
    };
    this.street = function () {
        return "Krakowska";
    };
    this.houseNumber = function () {
        return 10;
    };
    this.flatNumber = function () {
        return 3;
    };
    this.areaCode = function () {
        return "45-123";
    };
}
function Supplier() {
    this.numerKonta = function () {
        return "4454354354354343";
    };
    this.faktury = function () {
        return [];
    };
}
Supplier.prototype = new Customer();
console.log(Supplier);
