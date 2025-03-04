//metodos estaticos
class Calculadora{
    static sumar ( a, b){
        return a+b;
    }

    restar(a,b){
        return a-b;
    }

    static dividir(a,b){
        if(b != 0){
            return a / b;
        }else{
            return console.log("Infinito");
        }
    }
}

//los metodos estaticos se acceden desde la clase y no desde instancias
console.log(Calculadora.sumar(4,5));

const cal1 = new Calculadora();
console.log(cal1.restar(5,4));