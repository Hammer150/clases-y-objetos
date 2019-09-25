"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(num, cap) {
        this.nombre = num;
        this.capacidad = cap;
    }
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan(nom, apell) {
        this.nombre = nom;
        this.apellido = apell;
    }
    return BarMan;
}());
exports.BarMan = BarMan;
var Tragos = /** @class */ (function () {
    function Tragos(num, colr, cant) {
        this.nombre = num;
        this.color = colr;
        this.cantidad = cant;
    }
    return Tragos;
}());
exports.Tragos = Tragos;
//**BAR*/
var bar1 = new Bar("Nueva Era", 50);
var bar2 = new Bar("El Patito", 200);
var bar3 = new Bar("El Bateon", 100);
console.log(bar1);
console.log(bar2);
console.log(bar3);
//**BARMAN */
var barman1 = new BarMan("Felipe", "Escalera");
var barman2 = new BarMan("Gonzalo", "Mamani");
console.log(barman1);
console.log(barman2);
//**TRAGOS */
var trago1 = new Tragos("Ron", "cafe", 12);
var trago2 = new Tragos("Abuelo", "transparente", 1);
console.log(trago1);
console.log(trago2);
