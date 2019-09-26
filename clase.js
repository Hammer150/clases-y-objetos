"use strict";
exports.__esModule = true;
//**Figura Geometrica */
var Rectangulo = /** @class */ (function () {
    function Rectangulo(px, py, h, w) {
        this.posicionX = px;
        this.posicionY = py;
        this.heigh = h;
        this.width = w;
    }
    Rectangulo.prototype.setPocisionX = function (px) {
        this.posicionX = px;
    };
    Rectangulo.prototype.setPocisionY = function (py) {
        this.posicionY = py;
    };
    Rectangulo.prototype.setHeigh = function (h) {
        this.heigh = h;
    };
    Rectangulo.prototype.setWidth = function (w) {
        this.width = w;
    };
    Rectangulo.prototype.getPosicionX = function () {
        return this.posicionX;
    };
    Rectangulo.prototype.getPosicionY = function () {
        return this.posicionY;
    };
    Rectangulo.prototype.getHeigh = function () {
        return this.heigh;
    };
    Rectangulo.prototype.getWidth = function () {
        return this.width;
    };
    return Rectangulo;
}());
exports.Rectangulo = Rectangulo;
//**PRUEBAS */
var rectangulo1 = new Rectangulo(1, 5, 4, 6);
console.log(rectangulo1);
//**ACTUALIZACIONES */
rectangulo1.setPocisionX(4);
//console.log(rectangulo1.getPosicionX());
rectangulo1.setWidth(70);
//**ACTUALIZADO */
console.log(rectangulo1);
