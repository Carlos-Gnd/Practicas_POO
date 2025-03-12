class Estudiante{
    _nombre;
    _edad;
    _promedio;
    _activo;
    constructor(nombre, edad, promedio, activo){
        this._nombre = nombre;
        this._edad = edad;
        this._promedio = promedio;
        this._activo = activo;
    }
    getNombre(){
        return this._nombre;
    }
    getEdad(){
        return this._edad;
    }
    getPromedio(){
        return this._promedio;
    }
    getActivo(){
        return this._activo;
    }
    setNombre(nombre){
        return this._nombre = nombre;
    }
    setEdad(edad){
        return this._edad = edad;
    }
    setPromedio(promedio){
        return this._promedio = promedio;
    }
    setActivo(activo){
        return this._activo = activo;
    }
    actualizarPromedio(nuevaCalificacion){
        if (this._edad > 0 && nuevaCalificacion >= 0 && nuevaCalificacion <= 10 && this._activo) {
            this._promedio = nuevaCalificacion;
        }else{
            console.log("No se puede actualizar el promedio");
        }
    }
    cambiarEstado(){
        this._activo = !this._activo;
    }
    mostrarInformacion(){
        console.log(`Nombre: ${this._nombre}`);
        console.log(`Edad: ${this._edad}`);
        console.log(`Promedio: ${this._promedio}`);
        console.log(`Activo: ${this._activo}`);
    }
}
const Estudiante1 = new Estudiante("juan", 20, 8.5, true);
console.log(Estudiante1.getNombre());