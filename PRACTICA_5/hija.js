const Padre = require('./padre.js');

class Hija extends Padre{
    constructor(nombre, edad, hermanos){
        super(nombre, edad);
        this.hermanos = hermanos;
    }

    saludar(){
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`;
    }
    presentarHermanos(){
        console.log(`Mis hermanos son ${this.hermanos.join(', ')}`);
    }
}

const hija1 = new Hija("Juan", 20, ["Pedro", "Maria"]);
hija1.saludar();
hija1.presentarHermanos();