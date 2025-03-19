const Comunicacion = {
    enviarMensaje(mensaje){
        console.log(`${this.nombre} envio: ${mensaje}`);
    }
};

const Registro = {
    registrarAccion(accion){
        console.log(`${this.nombre} realizo: ${accion}`);
    }
}

class Usuario{
    constructor(nombre){
        this.nombre = nombre;
    }
}

Object.assign(Usuario.prototype, Comunicacion, Registro);

const usuario1 = new Usuario('Carlos');
usuario1.enviarMensaje('Hola');
usuario1.registrarAccion('Login');