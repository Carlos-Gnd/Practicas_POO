class inventario{
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    listar() {
        return this.productos;
    }
}

class cliente{
    constructor(nombre, correo){
        this.nombre = nombre;
        this.correo = correo;
    }
}

class Notificador{
    static enviarCorreo(destinatario, mensaje) {
        console.log(`Correo a ${destinatario.correo}: ${mensaje}`);
    }
}

class Tienda{
    constructor(){
        this.inventario = new inventario();
        this.clientes = [];
    }

    registrarCliente(cliente) {
        this.clientes.push(cliente);
        console.log(`Cliente registrado: ${cliente.nombre}`);
    }

    venderProducto(cliente, producto){
        if(this.inventario.productos.includes(producto)){
            console.log(`Venta realizada: ${producto} a ${cliente.nombre}`);
            Notificador.enviarCorreo(cliente, `Gracias por tu compra.`);
        } else {
            console.log(`Producto no disponible.`);
        }
    }
}

//Ejecución
const tienda = new Tienda();
const cliente1 = new cliente("Ana", "ana@mail.com");

tienda.inventario.agregarProducto("Camisa");
tienda.registrarCliente(cliente1);
tienda.venderProducto(cliente1, "Camisa");
