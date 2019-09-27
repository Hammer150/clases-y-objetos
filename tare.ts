//**Se necesita resolver el siguiente problema usado programacion orientada a objetos.*/
//**Se desea realizar un sistema de venta de cursos online como por ello se necesita interactuar con estudiantes, profesores de los mismos se necesita registrar su informacion basica como nombre, apellido, correo; por otra parte se necesita interactuar con los mismos cursos que se impartiran de los mismos se necesita registrar su precio, nombre, descripcion; finalmente se desa guardar el registro de los estudiantes que compraron algun curso */
//**Un estudiante o profesor puede tener una o mas direcciones, al mismo tiempo una direccionesta compuesta por la siguiente informacion: ciudad, barrio, calle.*/
export class Curso{
    private nombre: string;
    private descripcion: string;
    private precio: number;
    private profesor: Profesor;
    constructor(nom: string, desc: string, prec: number, prof: Profesor){
        this.nombre = nom;
        this.descripcion = desc;
        this.precio = prec;
        this.profesor = prof;
    }
}
export class Estudiante{
    private nombre: string;
    private apellido: string;
    private correo: string;
    private direccion: Direccion[];
    constructor(nom: string, ap: string, corr: string, dirc: Direccion[]){
        this.nombre = nom;
        this.apellido = ap;
        this.correo = corr;
        this.direccion = dirc;
    }
}
export class Profesor{
    private nombre: string;
    private apellido: string;
    private correo: string;
    private profesion: string;
    private direccion: Direccion[];
    constructor(nom: string, ap: string, corr: string, prof: string, dirc: Direccion[]){
        this.nombre = nom;
        this.apellido = ap;
        this.correo = corr;
        this.profesion = prof;
        this.direccion = dirc;
    }
}
export class CompraCurso{
    private curso: string;
    private estudiante: Estudiante;
    private fecha: string;
    constructor(cur: string, est: Estudiante, fec: string){
        this.curso = cur;
        this.estudiante = est;
        this.fecha = fec;
    }
}
export class Direccion{
    private ciudad: string;
    private barrio: string;
    private calle: string;
    constructor(c: string, b: string, call: string){
        this.ciudad = c;
        this.barrio = b;
        this.calle = call;
    }
}
//**profesor */
let profesor1: Profesor = new Profesor("Carlos", "Ajayeah", "ajayeah.com", "Tecnico", [new Direccion("Cercado", "amancayas", "calle6")]);
let profesor2: Profesor = new Profesor("Gerardo", "Molina", "molinaxd.com", "licenciado", [new Direccion("cocha","aroma", "los batosXd")]);

let curso1: Curso = new Curso("matematicas","calculo, numeros", 50, profesor1);
let curso2: Curso = new Curso("literatura", "lectura", 100, profesor2);
let curso3: Curso = new Curso("Politica", "leyes", 300, profesor1);
let curso4: Curso = new Curso("Contabilidad", "impuestos, matematicas", 600, profesor2);
let curso5: Curso = new Curso("Economia", "movimiento, funcion", 600, profesor1);

//**estudiantes */
let estudiante1: Estudiante = new Estudiante("Felipe", "Torrico", "felipe.com", [new Direccion("Cochabamba", "aniceto", "bellyn")]);
let estudiante2: Estudiante = new Estudiante("Brat", "Mamani", "brat.com", [new Direccion("cochabamba", "los patos", "ayacucho")]);
let estudiante3: Estudiante = new Estudiante("Waldo", "Gordillo", "gordi.com", [new Direccion("sacaba", "los finos", "calama")]);
//let estudiante4: Estudiante = new Estudiante



//**Pruebas */
console.log(curso1);
console.log(curso2);
console.log(curso3);
console.log(curso4);
console.log(curso5);

console.log(profesor1);
console.log(profesor2);


console.log(estudiante1);
console.log(estudiante2);
console.log(estudiante3);







