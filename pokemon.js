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
var Pokemon = /** @class */ (function () {
    function Pokemon(nom, tip, alt) {
        this.nombre = nom;
        this.tipo = tip;
        this.altura = alt;
    }
    return Pokemon;
}());
exports.Pokemon = Pokemon;
//**Tipo de Pokemon */
var Bulbasaur = /** @class */ (function (_super) {
    __extends(Bulbasaur, _super);
    function Bulbasaur(nom, tip, alt) {
        return _super.call(this, nom, tip, alt) || this;
    }
    Bulbasaur.prototype.getNumeroPokedex = function () {
        return 1;
    };
    Bulbasaur.prototype.getEvolucion = function () {
        return "Tiene 3 evoluciones";
    };
    Bulbasaur.prototype.getPeso = function () {
        return 80;
    };
    Bulbasaur.prototype.ventajasPlanta = function () {
        return "Fuerte contra: Tierra, roca y agua.";
    };
    Bulbasaur.prototype.ventajasVeneno = function () {
        return "Fuerte contra: Siniestro, planta y psíquico.";
    };
    return Bulbasaur;
}(Pokemon));
exports.Bulbasaur = Bulbasaur;
var Pikachu = /** @class */ (function (_super) {
    __extends(Pikachu, _super);
    function Pikachu(nom, tip, alt) {
        return _super.call(this, nom, tip, alt) || this;
    }
    Pikachu.prototype.getNumeroPokedex = function () {
        return 24;
    };
    Pikachu.prototype.getEvolucion = function () {
        return "tien 1 evoluciones";
    };
    Pikachu.prototype.getPeso = function () {
        return 10;
    };
    Pikachu.prototype.ventajasElectrico = function () {
        return "Fuerte contra: Volador y agua.";
    };
    return Pikachu;
}(Pokemon));
exports.Pikachu = Pikachu;
var Charizard = /** @class */ (function (_super) {
    __extends(Charizard, _super);
    function Charizard(nom, tip, alt) {
        return _super.call(this, nom, tip, alt) || this;
    }
    Charizard.prototype.getNumeroPokedex = function () {
        return 6;
    };
    Charizard.prototype.getEvolucion = function () {
        return "tiene 2 evoluciones";
    };
    Charizard.prototype.getPeso = function () {
        return 70;
    };
    Charizard.prototype.ventajasFuego = function () {
        return "Fuerte contra: Bicho, planta, hielo y acero.";
    };
    Charizard.prototype.ventajasVolador = function () {
        return "Fuerte contra: Bicho, lucha y planta.";
    };
    return Charizard;
}(Pokemon));
exports.Charizard = Charizard;
var Omanyte = /** @class */ (function (_super) {
    __extends(Omanyte, _super);
    function Omanyte(nom, tip, alt) {
        return _super.call(this, nom, tip, alt) || this;
    }
    Omanyte.prototype.getNumeroPokedex = function () {
        return 138;
    };
    Omanyte.prototype.getEvolucion = function () {
        return "tiene 1 evolucion";
    };
    Omanyte.prototype.getPeso = function () {
        return 60;
    };
    Omanyte.prototype.ventajasRoca = function () {
        return "Fuerte contra: Bicho, fuego, volador y hielo.";
    };
    Omanyte.prototype.ventajasAgua = function () {
        return "Fuerte contra: Fuego, tierra y roca.";
    };
    return Omanyte;
}(Pokemon));
exports.Omanyte = Omanyte;
//**Pruebas */
var bulbasaur = new Bulbasaur("bulbasaur", "planta y veneno", 0.40);
console.log(bulbasaur);
console.log(bulbasaur.ventajasVeneno());
console.log(bulbasaur.ventajasPlanta());
var pikachu = new Pikachu("pikachu", "electrico", 0.60);
console.log(pikachu);
console.log(pikachu.ventajasElectrico());
var charizard = new Charizard("charizard", "fuego y volador", 2.3);
console.log(charizard);
console.log(charizard.ventajasFuego());
console.log(charizard.ventajasVolador());
var omanyte = new Omanyte("omanyte", "roca y agua", 0.65);
console.log(omanyte);
console.log(omanyte.getNumeroPokedex());
console.log(omanyte.ventajasRoca());
console.log(omanyte.ventajasAgua());
