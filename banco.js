"use strict";
exports.__esModule = true;
var Banco = /** @class */ (function () {
    function Banco(i, r, t) {
        this.ingreso = i;
        this.reintegro = r;
        this.transferencia = t;
    }
    Banco.prototype.setIngreso = function (i) {
        this.ingreso = i;
    };
    Banco.prototype.setReintegro = function (r) {
        this.reintegro = r;
    };
    Banco.prototype.setTransferencia = function (t) {
        this.transferencia = t;
    };
    Banco.prototype.getIngreso = function () {
        return this.ingreso;
    };
    Banco.prototype.getReintegro = function () {
        return this.reintegro;
    };
    Banco.prototype.getTransferencia = function () {
        return this.reintegro;
    };
    Banco.prototype.getMovimiento = function () {
        var movimiento = +this.ingreso + this.reintegro - this.transferencia;
        return movimiento;
    };
    return Banco;
}());
exports.Banco = Banco;
//**Prueba */
var bancoBNB = new Banco(0, 0, 0);
console.log(bancoBNB);
bancoBNB.setIngreso(100);
console.log(bancoBNB);
bancoBNB.setTransferencia(50);
console.log(bancoBNB);
var movimientoBNB = bancoBNB.getMovimiento();
console.log("saldo", movimientoBNB);
