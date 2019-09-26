"use strict";
exports.__esModule = true;
var Trapezoid = /** @class */ (function () {
    function Trapezoid(a, b, h) {
        this.lengthOfSide = a;
        this.base = b;
        this.verticalHeigth = h;
    }
    Trapezoid.prototype.setLengthOfSide = function (a) {
        this.lengthOfSide = a;
    };
    Trapezoid.prototype.setBase = function (b) {
        this.base = b;
    };
    Trapezoid.prototype.setVerticalHeigth = function (h) {
        this.verticalHeigth = h;
    };
    Trapezoid.prototype.getLengthOgSide = function () {
        return this.lengthOfSide;
    };
    Trapezoid.prototype.getBase = function () {
        return this.base;
    };
    Trapezoid.prototype.getVerticalHeigth = function () {
        return this.verticalHeigth;
    };
    Trapezoid.prototype.getaLargo = function () {
        var aAltura = 1 / 2 * (this.lengthOfSide + this.base) * this.verticalHeigth;
        return aAltura;
    };
    return Trapezoid;
}());
exports.Trapezoid = Trapezoid;
//**Prueba */
var trapezoid1 = new Trapezoid(5, 10, 15);
console.log(trapezoid1);
var aLargoTrapezoid1 = trapezoid1.getaLargo();
console.log(aLargoTrapezoid1);
