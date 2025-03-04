class Empleado{
    #sueldo;
    constructor(nombre, puesto, sueldo){
        this.nombre = nombre;
        this.puesto = puesto;
        this.#sueldo = sueldo;
    }

    getSueldo(){
        return this.#sueldo;
    }

    setSueldo(nuevoSueldo){
        if(nuevoSueldo > this.#sueldo){
            this.#sueldo = nuevoSueldo;
        }else{
            console.log("vacio.")
        }
    }

    showInfo(){
        console.log(`Empleado: ${this.nombre}, Puesto: ${this.puesto}, Sueldo: ${this.#sueldo}`);
    }
}

const empleado1 = new Empleado("Carlos", "Dev", "600");
empleado1.showInfo();
empleado1.setSueldo(100);
empleado1.showInfo();
empleado1.setSueldo(2000);
empleado1.showInfo();