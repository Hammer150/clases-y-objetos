"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(num, cap) {
        this.nombre = num;
        this.capacidad = cap;
    }
    Bar.prototype.setNombre = function (num) {
        this.nombre = num;
    };
    Bar.prototype.setCapacidad = function (cap) {
        this.capacidad = cap;
    };
    Bar.prototype.getNombre = function () {
        return this.nombre;
    };
    Bar.prototype.getCapacidad = function () {
        return this.capacidad;
    };
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan(nom, apell) {
        this.nombre = nom;
        this.apellido = apell;
    }
    BarMan.prototype.setNombre = function (num) {
        this.nombre = num;
    };
    BarMan.prototype.setApellido = function (apell) {
        this.apellido = apell;
    };
    BarMan.prototype.getNombre = function () {
        return this.nombre;
    };
    BarMan.prototype.getApellido = function () {
        return this.apellido;
    };
    return BarMan;
}());
exports.BarMan = BarMan;
var Tragos = /** @class */ (function () {
    function Tragos(num, colr, cant) {
        this.nombre = num;
        this.color = colr;
        this.cantidad = cant;
    }
    Tragos.prototype.setNombre = function (num) {
        this.nombre = num;
    };
    Tragos.prototype.setColor = function (colr) {
        this.color = colr;
    };
    Tragos.prototype.setCantidad = function (cant) {
        this.cantidad = cant;
    };
    Tragos.prototype.getNombre = function () {
        return this.nombre;
    };
    Tragos.prototype.getColor = function () {
        return this.color;
    };
    Tragos.prototype.getCantidad = function () {
        return this.cantidad;
    };
    return Tragos;
}());
exports.Tragos = Tragos;
//**BAR*/
var bar1 = new Bar("Nueva Era", 50);
var bar2 = new Bar("El Patito", 200);
var bar3 = new Bar("El Bateon", 100);
bar1.setNombre('nuevaCerveza');
console.log(bar1.getNombre());
console.log(bar1);
console.log(bar2);
console.log(bar3);
//**BARMAN */
var barman1 = new BarMan("Felipe", "Escalera");
var barman2 = new BarMan("Gonzalo", "Mamani");
barman1.setApellido("Martinez");
console.log(barman1.getApellido());
console.log(barman1);
console.log(barman2);
//**TRAGOS */
var trago1 = new Tragos("Ron", "cafe", 12);
var trago2 = new Tragos("Abuelo", "transparente", 1);
trago1.setNombre("Maltin");
console.log(trago1.getNombre());
console.log(trago1);
console.log(trago2);
