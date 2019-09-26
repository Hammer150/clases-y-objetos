"use strict";
exports.__esModule = true;
var Squeare = /** @class */ (function () {
    function Squeare(alt, anch) {
        this.altura = alt;
        this.ancho = anch;
    }
    Squeare.prototype.setAlargo = function (a) {
        this.altura = a;
    };
    Squeare.prototype.setAaltura = function (alt) {
        this.ancho = alt;
    };
    Squeare.prototype.getAlargo = function () {
        return this.altura;
    };
    Squeare.prototype.getAaltura = function () {
        return this.ancho;
    };
    Squeare.prototype.getArea = function () {
        var area = Math.pow((this.altura * this.ancho), 2);
        return area;
    };
    return Squeare;
}());
exports.Squeare = Squeare;
//**prueba */
var cuadrado1 = new Squeare(5, 5);
console.log(cuadrado1);
var areaCuadrado1 = cuadrado1.getArea();
console.log(areaCuadrado1);
