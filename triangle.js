"use strict";
exports.__esModule = true;
var Triangle = /** @class */ (function () {
    function Triangle(b, vh) {
        this.base = b;
        this.verticalHeigth = vh;
    }
    Triangle.prototype.setBase = function (b) {
        this.base = b;
    };
    Triangle.prototype.setVerticalHeigth = function (vh) {
        this.verticalHeigth = vh;
    };
    Triangle.prototype.getBase = function () {
        return this.base;
    };
    Triangle.prototype.getVerticalHeigth = function () {
        return this.verticalHeigth;
    };
    Triangle.prototype.getaLargo = function () {
        var aAltura = 1 / 2 * this.base * this.verticalHeigth;
        return aAltura;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
//**Prueba */
var triangulo1 = new Triangle(50, 25);
console.log(triangulo1);
var aLargoTriangulo = triangulo1.getaLargo();
console.log(aLargoTriangulo);
