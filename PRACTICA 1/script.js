// //CLASES
// class Carro{
//     //Atributos y metodo constructor
//     constructor(color, marca, modelo, anio){
//         this._color = color;
//         this._marca = marca;
//         this._modelo = modelo;
//         this._anio = anio;
//     }
// }

//Creacion del objeto persona
const persona = {
    //atributos
    nombre: "Carlos",
    edad: 20,

    //Metodos
    saludar: function(){
        console.log(`Hola usuario ${this.nombre}`);
    }
}

//Metodo 
console.log(persona.nombre); //Carlos

//Metodo ["String"]
console.log(persona[`edad`]); //20

//Modificacion de propiedades
persona.edad = 30;
console.log(persona[`edad`]); //30

//add new prop
persona.ocupacion = "Developer";
console.log(persona.ocupacion);
console.log(persona);

delete persona.edad 
console.log(persona[`edad`])