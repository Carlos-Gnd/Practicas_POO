const Animal = require('./Animal')

class Perro extends Animal{
    constructor(nombre, raza, color){
        super(nombre, raza, color);
    }

    getName(){
        return super.getName();
    }

    sonido(){
        console.log(`gua gua`);
    }
}

let perro1 = new Perro("Simu", "Chihuhua", "Café")
console.log(perro1.getName());
perro1.sonido();