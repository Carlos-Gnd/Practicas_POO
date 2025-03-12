//Crear una clase padre con los siguientes atributos (nombre, edad) y un metodo saludar()
//heredar a una clase hija y crear un objeto para mostrar los metodos heredados.

class Padre{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

module.exports = Padre;