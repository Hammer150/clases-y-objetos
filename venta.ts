//**Se necesita resolver el siguiente problema usado programacion orientada a objetos.*/
//**Se desea realizar un sistema de venta de cursos online como por ello se necesita interactuar con estudiantes, profesores de los mismos se necesita registrar su informacion basica como nombre, apellido, correo; por otra parte se necesita interactuar con los mismos cursos que se impartiran de los mismos se necesita registrar su precio, nombre, descripcion; finalmente se desa guardar el registro de los estudiantes que compraron algun curso */
//**Un estudiante o profesor puede tener una o mas direcciones, al mismo tiempo una direccionesta compuesta por la siguiente informacion: ciudad, barrio, calle.*/
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
let direccion: Direccion = new Direccion("COCHABAMBA", "AROMA", "25 MAYO")
console.log(direccion);

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
let estudiante1: Estudiante = new Estudiante("Felipe","Cordova", "felipe.com", [direccion]);
console.log(estudiante1);
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
export class Curso{
    private nombre: string;
    private descripcion: string;
    private precio: number;
    private docente: Profesor[];
    constructor(nom: string, desc: string, prec: number, doc: Profesor[]){
        this.nombre = nom;
        this.descripcion = desc;
        this.precio = prec;
        this.docente = doc;
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

