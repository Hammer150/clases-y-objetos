export class Squeare{
    private altura: number;
    private ancho: number;
    constructor(alt: number, anch: number ) {
        this.altura = alt;
        this.ancho = anch;
    }
    public setAlargo(a: number): void{
        this.altura = a;
    }
    public setAaltura(alt: number): void{
        this.ancho = alt;
    }
    public getAlargo(): number{
        return this.altura;
    }
    public getAaltura(): number{
        return this.ancho;
    }
    public getArea(): number{
        let area: number = (this.altura*this.ancho)**2
        return area;
    }
}
//**prueba */
let cuadrado1: Squeare = new Squeare(5, 5);
console.log(cuadrado1);

let areaCuadrado1: number = cuadrado1.getArea();
console.log(areaCuadrado1);
