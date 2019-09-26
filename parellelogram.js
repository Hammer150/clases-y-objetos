"use strict";
exports.__esModule = true;
var Parellelogram = /** @class */ (function () {
    function Parellelogram(px, py, b, alt) {
        this.posicionX = px;
        this.posicionY = py;
        this.base = b;
        this.altura = alt;
    }
    Parellelogram.prototype.setPosicionX = function (px) {
        this.posicionX = px;
    };
    Parellelogram.prototype.setPosicionY = function (py) {
        this.posicionY = py;
    };
    Parellelogram.prototype.setBase = function (b) {
        this.base = b;
    };
    Parellelogram.prototype.setAltura = function (alt) {
        this.altura = alt;
    };
    Parellelogram.prototype.getPosicionX = function () {
        return this.posicionX;
    };
    Parellelogram.prototype.getPosicionY = function () {
        return this.posicionY;
    };
    Parellelogram.prototype.getBase = function () {
        return this.base;
    };
    Parellelogram.prototype.getAltura = function () {
        return this.altura;
    };
    Parellelogram.prototype.getaLargo = function () {
        var aAltura = this.base * this.altura;
        return aAltura;
    };
    return Parellelogram;
}());
exports.Parellelogram = Parellelogram;
//**PRUEBAS */
var parellelogram1 = new Parellelogram(5, 5, 50, 50);
console.log(parellelogram1);
var aLargoParellelogram1 = parellelogram1.getaLargo();
console.log("el aAltura es de: ", aLargoParellelogram1);
