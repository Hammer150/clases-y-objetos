"use strict";
exports.__esModule = true;
//**Se necesita resolver el siguiente problema usado programacion orientada a objetos.*/
//**Se desea realizar un sistema de venta de cursos online como por ello se necesita interactuar con estudiantes, profesores de los mismos se necesita registrar su informacion basica como nombre, apellido, correo; por otra parte se necesita interactuar con los mismos cursos que se impartiran de los mismos se necesita registrar su precio, nombre, descripcion; finalmente se desa guardar el registro de los estudiantes que compraron algun curso */
//**Un estudiante o profesor puede tener una o mas direcciones, al mismo tiempo una direccionesta compuesta por la siguiente informacion: ciudad, barrio, calle.*/
var Curso = /** @class */ (function () {
    function Curso(nom, desc, prec, prof) {
        this.nombre = nom;
        this.descripcion = desc;
        this.precio = prec;
        this.profesor = prof;
    }
    return Curso;
}());
exports.Curso = Curso;
var Estudiante = /** @class */ (function () {
    function Estudiante(nom, ap, corr, dirc) {
        this.nombre = nom;
        this.apellido = ap;
        this.correo = corr;
        this.direccion = dirc;
    }
    return Estudiante;
}());
exports.Estudiante = Estudiante;
var Profesor = /** @class */ (function () {
    function Profesor(nom, ap, corr, prof, dirc) {
        this.nombre = nom;
        this.apellido = ap;
        this.correo = corr;
        this.profesion = prof;
        this.direccion = dirc;
    }
    return Profesor;
}());
exports.Profesor = Profesor;
var CompraCurso = /** @class */ (function () {
    function CompraCurso(cur, est, fec) {
        this.curso = cur;
        this.estudiante = est;
        this.fecha = fec;
    }
    return CompraCurso;
}());
exports.CompraCurso = CompraCurso;
var Direccion = /** @class */ (function () {
    function Direccion(c, b, call) {
        this.ciudad = c;
        this.barrio = b;
        this.calle = call;
    }
    return Direccion;
}());
exports.Direccion = Direccion;
//**profesor */
var profesor1 = new Profesor("Carlos", "Ajayeah", "ajayeah.com", "Tecnico", [new Direccion("Cercado", "amancayas", "calle6")]);
var profesor2 = new Profesor("Gerardo", "Molina", "molinaxd.com", "licenciado", [new Direccion("cocha", "aroma", "los batosXd")]);
var curso1 = new Curso("matematicas", "calculo, numeros", 50, profesor1);
var curso2 = new Curso("literatura", "lectura", 100, profesor2);
var curso3 = new Curso("Politica", "leyes", 300, profesor1);
var curso4 = new Curso("Contabilidad", "impuestos, matematicas", 600, profesor2);
var curso5 = new Curso("Economia", "movimiento, funcion", 600, profesor1);
//**estudiantes */
var estudiante1 = new Estudiante("Felipe", "Torrico", "felipe.com", [new Direccion("Cochabamba", "aniceto", "bellyn")]);
var estudiante2 = new Estudiante("Brat", "Mamani", "brat.com", [new Direccion("cochabamba", "los patos", "ayacucho")]);
var estudiante3 = new Estudiante("Waldo", "Gordillo", "gordi.com", [new Direccion("sacaba", "los finos", "calama")]);
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
