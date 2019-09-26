export class Banco{
    private ingreso: number;
    private contador = [];
    private reintegro: number;
    private transferencia: number;
    constructor(i: number, r: number, t:number){
        this.ingreso = i;
        this.reintegro = r;
        this.transferencia = t;
    }
    public setIngreso(i: number): void{
        this.ingreso = i;
    }
    public setReintegro(r: number): void{
        this.reintegro = r;
    }
    public setTransferencia(t: number): void{
        this.transferencia = t;
    }
    public getIngreso(): number{
        return this.ingreso;
    }
    public getReintegro(): number{
        return this.reintegro;
    }
    public getTransferencia(): number{
        return this.reintegro
    }
    public getMovimiento(): number{
        let movimiento: number = +this.ingreso+this.reintegro-this.transferencia;
        return movimiento;
    }
}
//**Prueba */
let bancoBNB: Banco = new Banco(0, 0, 0);
console.log(bancoBNB);
bancoBNB.setIngreso(100);
console.log(bancoBNB);
bancoBNB.setTransferencia(50);
console.log(bancoBNB);
let movimientoBNB: number = bancoBNB.getMovimiento();
console.log("saldo", movimientoBNB);
bancoBNB.setTransferencia(50);
console.log("saldo", movimentoBNB);






