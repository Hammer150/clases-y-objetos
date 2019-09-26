export class Triangle{
    private base: number;
    private verticalHeigth: number;
    constructor(b: number, vh: number){
        this.base = b;
        this.verticalHeigth = vh;
    }
    public setBase(b: number): void{
        this.base = b;
    }
    public setVerticalHeigth(vh: number): void{
        this.verticalHeigth = vh;
    }
    public getBase(): number{
        return this.base;
    }
    public getVerticalHeigth(): number{
        return this.verticalHeigth;
    }
    public getArea(): number{
        let area: number = 1/2*this.base*this.verticalHeigth;
        return area;
    }
}
//**Prueba */
let triangulo1: Triangle = new Triangle(50, 25);
console.log(triangulo1);
let areaLargoTriangulo: number = triangulo1.getArea();
console.log(areaLargoTriangulo);

