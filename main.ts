export class Bar {
    private nombre:string;
    private capacidad:number;
    constructor (num:string, cap:number){
        this.nombre = num;
        this.capacidad = cap;     
    }
    public setNombre(num: string): void{
        this.nombre = num;
    }
    public setCapacidad(cap: number): void{
        this.capacidad = cap;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getCapacidad(): number {
        return this.capacidad;
    }
}

export class BarMan {
    private nombre:string;
    private apellido:string;
    constructor (nom:string, apell:string){
        this.nombre = nom;
        this.apellido = apell;
    }
    public setNombre(num: string): void{
        this.nombre = num;
    }
    public setApellido(apell: string): void{
        this.apellido = apell;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getApellido(): string {
        return this.apellido;
    }
}

export	class Tragos {
    private nombre:string;
    private color:string;
    private cantidad:number;
    constructor (num:string, colr:string, cant:number){
        this.nombre = num;
        this.color = colr;
        this.cantidad = cant;
    }
    public setNombre(num: string): void {
        this.nombre = num;
    }
    public setColor(colr: string): void {
        this.color = colr;
    }
    public setCantidad(cant: number): void {
        this.cantidad = cant;
    } 
    public getNombre(): string {
        return this.nombre;
    }
    public getColor(): string {
        return this.color;
    }
    public getCantidad(): number {
        return this.cantidad;
    }
}
//**BAR*/


let bar1: Bar = new Bar("Nueva Era", 50);
let bar2: Bar = new Bar("El Patito", 200);
let bar3: Bar = new Bar("El Bateon", 100);

bar1.setNombre('nuevaCerveza');
console.log(bar1.getNombre());

console.log(bar1);
console.log(bar2);
console.log(bar3);


//**BARMAN */
let barman1: BarMan = new BarMan("Felipe", "Escalera");
let barman2: BarMan = new BarMan("Gonzalo", "Mamani");

barman1.setApellido("Martinez");
console.log(barman1.getApellido());

console.log(barman1);
console.log(barman2);

//**TRAGOS */
let trago1: Tragos = new Tragos("Ron", "cafe", 12);
let trago2: Tragos = new Tragos("Abuelo", "transparente", 1 );

trago1.setNombre("Maltin");
console.log(trago1.getNombre());


console.log(trago1);
console.log(trago2);


