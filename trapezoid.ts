export class Trapezoid{
    private lengthOfSide: number;
    private base: number;
    private verticalHeigth: number;
    constructor(a: number, b: number, h: number){
        this.lengthOfSide = a;
        this.base = b;
        this.verticalHeigth = h;
    }
    public setLengthOfSide(a: number): void{
        this.lengthOfSide = a;
    }
    public setBase(b: number): void{
        this.base = b;
    }
    public setVerticalHeigth(h: number): void{
        this.verticalHeigth = h;
    }
    public getLengthOgSide(): number{
        return this.lengthOfSide;
    }
    public getBase(): number{
        return this.base;
    }
    public getVerticalHeigth(): number{
        return this.verticalHeigth;
    }
    public getArea(): number{
        let area: number = 1/2*(this.lengthOfSide+this.base)*this.verticalHeigth;
        return area;
    }
}
//**Prueba */
let trapezoid1: Trapezoid = new Trapezoid(5, 10, 15);
console.log(trapezoid1);

let areaTrapezoid1: number = trapezoid1.getArea();
console.log(areaTrapezoid1);

