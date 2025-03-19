const Autenticacion = {
    login(usuario){
        console.log(`${usuario} ha iniciado sesion`);
    }
};

const Notificación = {
    enviarNotificacion(mensaje){
        console.log(`Notificación: ${mensaje}`);
    }
}

class Usuario{
    constructor(nombre){
        this.nombre = nombre;
    }
}

Object.assign(Usuario.prototype, Autenticacion, Notificación);

const usuario1 = new Usuario('Carlos');
usuario1.login(usuario1.nombre);
usuario1.enviarNotificacion("Tienes un mensaje pendiente");