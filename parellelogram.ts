export class Parellelogram{
    private posicionX: number;
    private posicionY: number;
    private base: number;
    private altura: number;
    constructor(px: number, py: number, b: number, alt: number){
        this.posicionX = px;
        this.posicionY = py;
        this.base = b;
        this.altura = alt;
    }
    public setPosicionX(px: number): void{
        this.posicionX = px;
    }
    public setPosicionY(py: number): void{
        this.posicionY = py;
    }
    public setBase(b: number): void{
        this.base = b;
    }
    public setAltura(alt: number): void{
        this.altura = alt;
    }
    public getPosicionX(): number{
        return this.posicionX;
    }
    public getPosicionY(): number{
        return this.posicionY;
    }
    public getBase(): number{
        return this.base;
    }
    public getAltura(): number{
        return this.altura;
    }
    public getArea(): number{
        let area: number = this.base * this.altura;
        return area;
    }
}
//**PRUEBAS */
let parellelogram1: Parellelogram = new Parellelogram(5, 5,50,50);
console.log(parellelogram1);
let aLargoParellelogram1: number = parellelogram1.getArea();
console.log("el area es de: ", aLargoParellelogram1);
