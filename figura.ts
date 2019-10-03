export abstract class FiguraGometrica{
    constructor(private altura: number, private base: number, private largo: number){

    }
    getAltura(): number{
        return this.altura;
    }
    getBase(): number{
        return this.base;
    }
    getLargo(): number{
        return this.largo;
    }
    abstract getArea(): number;
    abstract getVolumen(): number;
}
export class Triangulo extends FiguraGometrica{
    constructor(altura: number, base: number, largo: number){
        super(altura, base, largo)
    }
    getArea(): number{
        let area: number = (this.getAltura() * this.getBase())*1/2;
        return area;
    }
    getVolumen(): number{
        let volumen: number = 1/3*(this.getArea()*this.getAltura());
        return volumen;
    }
}
export class Rectangulo extends FiguraGometrica{
    constructor(altura: number, base: number, largo: number){
        super(altura, base, largo)
    }
    getArea(): number{
        let area: number = this.getBase()*this.getAltura();
        return area;
    }
    getVolumen(): number{
        let volumen: number = this.getAltura()*this.getBase()*this.getLargo();
        return volumen;
    }
}

let triangulo1: FiguraGometrica = new Triangulo(10, 5, 15);
console.log(triangulo1);

console.log("salio", triangulo1.getArea(), "te dije");
console.log(triangulo1.getVolumen());

let rectangulo1: FiguraGometrica = new Rectangulo(10, 15, 20);
console.log(rectangulo1);
console.log(rectangulo1.getArea());
console.log(rectangulo1.getVolumen());

