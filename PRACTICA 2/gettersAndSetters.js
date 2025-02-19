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
}

let usuario1 = new Usuario("Carlos", 24);
console.log(usuario1.getName());
usuario1.setName("Otro");
console.log(usuario1.getName);