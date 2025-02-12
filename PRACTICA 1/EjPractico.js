class Coche{
    constructor(marca, modelo, anio){
        
        this._marca = marca;
        this._modelo = modelo;
        this._anio = anio;
        this._encendido = false;
    }

    encender(){
        this._encendido = true;
        console.log("El coche está encendido.");
    }

    apagar(){
        this._encendido = false;
        console.log("El coche está apagado.");
    }

    info(){
        console.log(`Este coche es un ${this._marca}, ${this._modelo} del año ${this._anio}.`);
    }
}

const coche1 = new Coche("Toyota", "Corolla", 2024);
coche1.encender();
coche1.info();