const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Usuario{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    getName(){
        return this.nombre;
    }

    setName(newName){
        this.nombre = newName;
    }

    showInfo(){
        console.log(`Usuario: ${this.nombre}, Edad: ${this.edad}.`);
    }
}

rl.question("Ingrese su nombre: ", (nombre)=>{
    rl.question("Ingrese su edad: ", (edad)=>{
        const usuario1 = new Usuario(nombre, parseInt(edad));
        usuario1.showInfo();
        usuario1.setName(newName);
        console.error("======================");
        usuario1.setName("Nuevo nombre");
        usuario1.showInfo();
        console.log(`Metodo getName: ` +getName())
        rl.close;
    })
})