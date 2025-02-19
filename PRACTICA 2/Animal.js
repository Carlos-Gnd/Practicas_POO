//Clase
class Animal{
    //Atribiutos
    #name; //Atributo privado
    _raza; //Atributo protegido
    color; //Atributo publico
    //Metodos
    constructor(name, raza, color){
        this.#name = name;
        this._raza = raza;
        this.color = color;
    }

    //Metodo
    //Metodos getters
    getName(){
        return this.#name;
    }

    //Metodos setters
    setName(nuevoNombre){

    }
    
    sonido(){
        console.log(`El animal esta haciendo un sonido...`);
    }
}

module.exports = Animal;