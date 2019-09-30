export class Disco{
    private cliente: string;
    private Pelicula: string;
    private precio: number;
    constructor(clit: string, nomPel: string){
        this.cliente = clit;
        this.Pelicula = nomPel;       
    }
    precioDisco(prec: number){
        this.precio = prec;
    }
    public setPrecio(prec: number): void{
        this.precio = prec;
    }
    public getPrecio(): number{
        return this.precio;
    }
}
class Cds extends Disco{
    constructor(clit: string, nomPel: string){
        super(clit, nomPel);
    }
}
class Dvd extends Disco{
    constructor(clit: string, nomPel: string){
        super(clit, nomPel,);
    }
}
class BluRays extends Disco{
    constructor(clit: string, nomPel: string){
        super(clit, nomPel)
    }
}
//**Cds*/
let cds0: Disco = new Cds("Jonas", "Spiderman");
cds0.precioDisco(10);
let cds1: Disco = new Cds("Evaristo", "Avengers");
cds1.precioDisco(14);

//**dvs */
let dvd: Disco = new Dvd("Pablo", "Teletubis");
dvd.precioDisco(50);

//**blueRays */
let bluRays: Disco = new BluRays("Pepe", "Dbz");
bluRays.precioDisco(45);

//**prueba */
console.log(cds0);
console.log(cds1);

console.log(dvd);

console.log(bluRays);
