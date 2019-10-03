"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var FiguraGometrica = /** @class */ (function () {
    function FiguraGometrica(altura, base, largo) {
        this.altura = altura;
        this.base = base;
        this.largo = largo;
    }
    FiguraGometrica.prototype.getAltura = function () {
        return this.altura;
    };
    FiguraGometrica.prototype.getBase = function () {
        return this.base;
    };
    FiguraGometrica.prototype.getLargo = function () {
        return this.largo;
    };
    return FiguraGometrica;
}());
exports.FiguraGometrica = FiguraGometrica;
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(altura, base, largo) {
        return _super.call(this, altura, base, largo) || this;
    }
    Triangulo.prototype.getArea = function () {
        var area = (this.getAltura() * this.getBase()) * 1 / 2;
        return area;
    };
    Triangulo.prototype.getVolumen = function () {
        var volumen = 1 / 3 * (this.getArea() * this.getAltura());
        return volumen;
    };
    return Triangulo;
}(FiguraGometrica));
exports.Triangulo = Triangulo;
var Rectangulo = /** @class */ (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo(altura, base, largo) {
        return _super.call(this, altura, base, largo) || this;
    }
    Rectangulo.prototype.getArea = function () {
        var area = this.getBase() * this.getAltura();
        return area;
    };
    Rectangulo.prototype.getVolumen = function () {
        var volumen = this.getAltura() * this.getBase() * this.getLargo();
        return volumen;
    };
    return Rectangulo;
}(FiguraGometrica));
exports.Rectangulo = Rectangulo;
var triangulo1 = new Triangulo(10, 5, 15);
console.log(triangulo1);
console.log("salio", triangulo1.getArea(), "te dije");
console.log(triangulo1.getVolumen());
var rectangulo1 = new Rectangulo(10, 15, 20);
console.log(rectangulo1);
console.log(rectangulo1.getArea());
console.log(rectangulo1.getVolumen());
