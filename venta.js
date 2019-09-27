"use strict";
exports.__esModule = true;
//**Se necesita resolver el siguiente problema usado programacion orientada a objetos.*/
//**Se desea realizar un sistema de venta de cursos online como por ello se necesita interactuar con estudiantes, profesores de los mismos se necesita registrar su informacion basica como nombre, apellido, correo; por otra parte se necesita interactuar con los mismos cursos que se impartiran de los mismos se necesita registrar su precio, nombre, descripcion; finalmente se desa guardar el registro de los estudiantes que compraron algun curso */
//**Un estudiante o profesor puede tener una o mas direcciones, al mismo tiempo una direccionesta compuesta por la siguiente informacion: ciudad, barrio, calle.*/
var Direccion = /** @class */ (function () {
    function Direccion(c, b, call) {
        this.ciudad = c;
        this.barrio = b;
        this.calle = call;
    }
    return Direccion;
}());
exports.Direccion = Direccion;
var direccion = new Direccion("COCHABAMBA", "AROMA", "25 MAYO");
console.log(direccion);
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
var estudiante1 = new Estudiante("Felipe", "Cordova", "felipe.com", [direccion]);
console.log(estudiante1);
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
var Curso = /** @class */ (function () {
    function Curso(nom, desc, prec, doc) {
        this.nombre = nom;
        this.descripcion = desc;
        this.precio = prec;
        this.docente = doc;
    }
    return Curso;
}());
exports.Curso = Curso;
var CompraCurso = /** @class */ (function () {
    function CompraCurso(cur, est, fec) {
        this.curso = cur;
        this.estudiante = est;
        this.fecha = fec;
    }
    return CompraCurso;
}());
exports.CompraCurso = CompraCurso;
