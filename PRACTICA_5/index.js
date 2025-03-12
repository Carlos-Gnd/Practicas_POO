//crear un sistema para verificar si un usuario tiene acceso a un panel de administracion
//El usuario debe estar registrado
//El usuario debe tener permisos de admin
//la cuenta del usuario no debe estar suspendida


let isRegistered = true;
let isAdmin = true;
let isSuspended = false;

function verificarAcceso(isRegistered, isAdmin, isSuspended) {
    if (isRegistered && isAdmin && !isSuspended) {
        return 'Acceso concedido';
    } else {
        return 'Acceso denegado';
    }
}

console.log(verificarAcceso(isRegistered, isAdmin, isSuspended));