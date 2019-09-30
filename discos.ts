export class Disco{
    private cliente: string;
    private pelicula: string;
    private precio: number;
    constructor(clit: string){
        this.cliente = clit;
    }
    peliculaDatos(peln: string, prec: number){
        this.pelicula = peln;
        this.precio = prec;
    }
}
export class Cds extends Disco{
    constructor(clit: string){
        super(clit);
    }
}
export class Dvd extends Disco{
    constructor(clit: string){
        super(clit);
    }
}
export class BluRays extends Disco{
    constructor(clit: string){
        super(clit);
    }
}
let cds1: Disco = new Cds("Pablito");
cds1.peliculaDatos("Dragon ball", 10);

let dvd1: Disco = new Dvd("Waldo");
dvd1.peliculaDatos("Spider Man", 20);

let bluRays1: Disco = new BluRays("Pepe");
bluRays1.peliculaDatos("Avengers", 45);

console.log(cds1);
console.log(dvd1);
console.log(bluRays1);


