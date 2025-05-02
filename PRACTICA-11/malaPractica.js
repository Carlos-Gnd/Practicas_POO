class Tienda{
    constructor(){
        this.inventario = [];
        this.clientes = [];
    }

    agregarProducto(producto){
        this.inventario.push(producto);
    }

    registrarCliente(cliente){
        this.clientes.push(cliente);
    }

    venderProducto(cliente, producto){
        console.log(`Vendido ${producto} a ${cliente}`);
        //logica mesclada en una sola clase
    }

    enviarEmail(cliente, mensaje){
        console.log(`Enviando email a ${cliente}: ${mensaje}`);
    }
}

const tienda = new Tienda();
tienda.agregarProducto("Camisa");
tienda.registrarCliente("Ana");
tienda.venderProducto("Ana", "Camisa");
tienda.enviarEmail("Ana", "Gracias por tu compra");
