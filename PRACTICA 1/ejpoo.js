//Clase
class Coche{
    //ATRIBUTOS
    //metodo constructor
    constructor(marca, modelo, anio, encendido){
        //inicializar
        this._marca = marca;
        this._modelo = modelo;
        this._anio = anio;
        this._encendido = encendido;
    }

    //metodos
    showInfo(){
        document.write(`Marca: ${this._marca}, Modelo: ${this._modelo}`);
    }

    encender(){
        if (this._encendido) {
            document.write("El auto esta encendido");
        }else{
            document.write("El auto esta apagado");
        }
    }
}

//Instancia
const coche1 = new Coche("Honda", "Civic", 2010, false);
coche1.encender();