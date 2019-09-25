export class Bar {
    nombre:string;
    capacidad:number;
    constructor (num:string, cap:number){
        this.nombre = num;
        this.capacidad = cap;
    }
}

export class BarMan {
    nombre:string;
    apellido:string;
    constructor (nom:string, apell:string){
        this.nombre = nom;
        this.apellido = apell;
    }
}

export	class Tragos {
    nombre:string;
    color:string;
    cantidad:number;
    constructor (num:string, colr:string, cant:number){
        this.nombre = num;
        this.color = colr;
        this.cantidad = cant;
    }
}
//**BAR*/
let bar1: Bar = new Bar("Nueva Era", 50);
let bar2: Bar = new Bar("El Patito", 200);
let bar3: Bar = new Bar("El Bateon", 100);

console.log(bar1);
console.log(bar2);
console.log(bar3);


//**BARMAN */
let barman1: BarMan = new BarMan("Felipe", "Escalera");
let barman2: BarMan = new BarMan("Gonzalo", "Mamani");

console.log(barman1);
console.log(barman2);

//**TRAGOS */
let trago1: Tragos = new Tragos("Ron", "cafe", 12);
let trago2: Tragos = new Tragos("Abuelo", "transparente", 1 );

console.log(trago1);
console.log(trago2);


