//Plantilla
class Libro{
    constructor(titulo, autor, anioPublicacion){
        this._titulo = titulo;
        this._autor = autor;
        this._anioPublicacion = anioPublicacion;
    }
}

//esta clase es la que debemos instanciar como objeto.
class Biblioteca{
    constructor(){
        this.libros = [];
    }

    agregarLibro(titulo, autor, anioPublicacion){
        //aqui se usa la clase Libro
        const nuevoLibro = new Libro(titulo, autor, anioPublicacion);
        this.libros.push(nuevoLibro);
        console.log(`El libro ${titulo} ha sido agregado a la biblioteca.`);
    }

    buscarPorTitulo(titulo){
        const libroEncontrado = this.libros.filter(libro => libro._titulo.includes(titulo));
        if(libroEncontrado.length > 0){
            console.log(`Libro encontrado.`);
            libroEncontrado.forEach(libro => {
                console.log(`${libro._titulo} de ${libro._autor} publicado en ${libro._anioPublicacion}`)
            });
        }else{
            console.log(`No se encontro ningun libro con el titulo: ${_titulo}`);
        }
    }

    mostrarLibros(){
        if(this.libros.length > 0){
            console.log("LIBROS DISPONIBLES:");
            this.libros.forEach(libro => {
                console.log(`${libro._titulo} de ${libro._autor} publicado en ${libro._anioPublicacion}`);
            })
        }else{
            console.log("Biblioteca vacia!");
        }
    }
}
 const miBiblioteca = new Biblioteca();
 miBiblioteca.mostrarLibros();

 miBiblioteca.agregarLibro("Primer titulo", "yo", "2025");
 miBiblioteca.mostrarLibros();

 miBiblioteca.buscarPorTitulo("Primer titulo");