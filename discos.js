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
    function Disco(clit) {
        this.cliente = clit;
    }
    Disco.prototype.peliculaDatos = function (peln, prec) {
        this.pelicula = peln;
        this.precio = prec;
    };
    return Disco;
}());
exports.Disco = Disco;
var Cds = /** @class */ (function (_super) {
    __extends(Cds, _super);
    function Cds(clit) {
        return _super.call(this, clit) || this;
    }
    return Cds;
}(Disco));
exports.Cds = Cds;
var Dvd = /** @class */ (function (_super) {
    __extends(Dvd, _super);
    function Dvd(clit) {
        return _super.call(this, clit) || this;
    }
    return Dvd;
}(Disco));
exports.Dvd = Dvd;
var BluRays = /** @class */ (function (_super) {
    __extends(BluRays, _super);
    function BluRays(clit) {
        return _super.call(this, clit) || this;
    }
    return BluRays;
}(Disco));
exports.BluRays = BluRays;
var cds1 = new Cds("Pablito");
cds1.peliculaDatos("Dragon ball", 10);
var dvd1 = new Dvd("Waldo");
dvd1.peliculaDatos("Spider Man", 20);
var bluRays1 = new BluRays("Pepe");
bluRays1.peliculaDatos("Avengers", 45);
console.log(cds1);
console.log(dvd1);
console.log(bluRays1);
