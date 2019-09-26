//**Figura Geometrica */
export class Rectangulo{
    private posicionX: number;
    private posicionY: number;
    private heigh: number;
    private width: number;

    constructor (px: number, py: number, h: number, w: number){
        this.posicionX = px;
        this.posicionY = py;
        this.heigh = h;
        this.width = w;
    }
    public setPocisionX(px: number): void{
        this.posicionX = px;
    }
    public setPocisionY(py: number): void{
        this.posicionY = py;
    }
    public setHeigh(h: number): void{
        this.heigh = h;
    }
    public setWidth(w: number): void{
        this.width = w;
    }
    public getPosicionX(): number{
        return this.posicionX;
    }
    public getPosicionY(): number{
        return this.posicionY;
    }
    public getHeigh(): number{
        return this.heigh;
    }
    public getWidth(): number{
        return this.width;
    }
    
}
//**PRUEBAS */
let rectangulo1: Rectangulo = new Rectangulo(1,5,4,6);
console.log(rectangulo1);

//**ACTUALIZACIONES */
rectangulo1.setPocisionX(4);

rectangulo1.setWidth(70);

//**ACTUALIZADO */
console.log(rectangulo1);
