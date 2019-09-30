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
var Disco = /** @class */ (function () {
    function Disco(clit, nomPel) {
        this.cliente = clit;
        this.Pelicula = nomPel;
    }
    Disco.prototype.precioDisco = function (prec) {
        this.precio = prec;
    };
    Disco.prototype.setPrecio = function (prec) {
        this.precio = prec;
    };
    Disco.prototype.getPrecio = function () {
        return this.precio;
    };
    return Disco;
}());
exports.Disco = Disco;
var Cds = /** @class */ (function (_super) {
    __extends(Cds, _super);
    function Cds(clit, nomPel) {
        return _super.call(this, clit, nomPel) || this;
    }
    return Cds;
}(Disco));
var Dvd = /** @class */ (function (_super) {
    __extends(Dvd, _super);
    function Dvd(clit, nomPel) {
        return _super.call(this, clit, nomPel) || this;
    }
    return Dvd;
}(Disco));
var BluRays = /** @class */ (function (_super) {
    __extends(BluRays, _super);
    function BluRays(clit, nomPel) {
        return _super.call(this, clit, nomPel) || this;
    }
    return BluRays;
}(Disco));
//**Cds*/
var cds0 = new Cds("Jonas", "Spiderman");
cds0.precioDisco(10);
var cds1 = new Cds("Evaristo", "Avengers");
cds1.precioDisco(14);
//**dvs */
var dvd = new Dvd("Pablo", "Teletubis");
dvd.precioDisco(50);
//**blueRays */
var bluRays = new BluRays("Pepe", "Dbz");
bluRays.precioDisco(45);
//**prueba */
console.log(cds0);
console.log(cds1);
console.log(dvd);
console.log(bluRays);
