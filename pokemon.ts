export abstract class Pokemon{
    protected nombre: string;
    protected tipo: string;
    protected altura: number
    constructor(nom: string, tip: string, alt: number){
        this.nombre = nom;
        this.tipo = tip;
        this.altura = alt;
    }
    abstract getNumeroPokedex(): number;
    abstract getEvolucion(): string;
    abstract getPeso(): number;
}
export interface PokemonPlanta{
    ventajasPlanta(): string;
}
export interface PokemonFuego{
    ventajasFuego(): string;
}
export interface PokemonRoca{
    ventajasRoca(): string;
}
export interface PokemonVolador{
    ventajasVolador(): string;
}
export interface PokemonAgua{
    ventajasAgua(): string;
}
export interface PokemonElectrico{
    ventajasElectrico(): string;
}
export interface PokemonVeneno{
    ventajasVeneno(): string;
}
//**Tipo de Pokemon */
export class Bulbasaur extends Pokemon implements PokemonPlanta, PokemonVeneno{
    constructor(nom: string, tip: string, alt: number){
        super(nom, tip, alt);
    }
    getNumeroPokedex(): number{
        return 1;
    }
    getEvolucion(): string{
        return "Tiene 2 evoluciones";
    }
    getPeso(): number{
        return 80;
    }
    ventajasPlanta(): string{
        return "Fuerte contra: Tierra, roca y agua.";
    }
    ventajasVeneno(): string{
        return "Fuerte contra: Siniestro, planta y psíquico.";
    }
}
export class Pikachu extends Pokemon implements PokemonElectrico{
    constructor(nom: string, tip: string, alt: number){
        super(nom, tip, alt);
    }
    getNumeroPokedex(): number{
        return 24;
    }
    getEvolucion(): string{
        return "tien 1 evoluciones";
    }
    getPeso(): number{
        return 10;
    }
    ventajasElectrico(): string{
        return "Fuerte contra: Volador y agua.";
    }
}
export class Charizard extends Pokemon implements PokemonFuego, PokemonVolador{
    constructor(nom: string, tip: string, alt: number){
        super(nom, tip, alt);
    }
    getNumeroPokedex(): number{
        return 6;
    }
    getEvolucion(): string{
        return "tiene 2 evoluciones";
    }
    getPeso(): number{
        return 70;
    }
    ventajasFuego(): string{
        return "Fuerte contra: Bicho, planta, hielo y acero.";
    }
    ventajasVolador(): string{
        return "Fuerte contra: Bicho, lucha y planta.";
    }
}
export class Omanyte extends Pokemon implements PokemonRoca, PokemonAgua{
    constructor(nom: string, tip: string, alt: number){
        super(nom, tip, alt);
    }
    getNumeroPokedex(): number{
        return 138;
    }
    getEvolucion(): string{
        return "tiene 1 evolucion";
    }
    getPeso(): number{
        return 60;
    }
    ventajasRoca(): string{
        return "Fuerte contra: Bicho, fuego, volador y hielo.";
    }
    ventajasAgua(): string{
        return "Fuerte contra: Fuego, tierra y roca.";
    }
} 
//**Pruebas */
let bulbasaur: Bulbasaur = new Bulbasaur("bulbasaur", "planta y veneno", 0.40);
console.log(bulbasaur);
console.log(bulbasaur.ventajasVeneno());
console.log(bulbasaur.ventajasPlanta());

let pikachu: Pikachu = new Pikachu("pikachu", "electrico", 0.60);
console.log(pikachu);
console.log(pikachu.ventajasElectrico());

let charizard: Charizard = new Charizard("charizard", "fuego y volador", 2.3);
console.log(charizard);
console.log(charizard.ventajasFuego());
console.log(charizard.ventajasVolador());

let omanyte: Omanyte = new Omanyte("omanyte", "roca y agua", 0.65);
console.log(omanyte);
console.log(omanyte.getNumeroPokedex());
console.log(omanyte.ventajasRoca());
console.log(omanyte.ventajasAgua());









