class CuentaBancaria{
    _numeroCuenta;
    _titular;
    _saldo;
    _activa;
    constructor(numeroCuenta, titular, saldo, activa){
        this._numeroCuenta = numeroCuenta;
        this._titular = titular;
        this._saldo = saldo;
        this._activa = activa;
    }

    getNumeroCuenta(){
        return this._numeroCuenta;
    }
    getTitular(){
        return this._titular; 
    }
    getSaldo(){
        return this._saldo;
    }
    getActiva(){
        return this._activa;
    }

    setNumeroCuenta(numeroCuenta){
        this._numeroCuenta = numeroCuenta;
    }
    setTitular(titular){
        this._titular = titular;
    }
    setActiva(activa){
        this._activa = activa;
    }
    Depositar(monto){
        this._saldo += mont0
    }
    Retirar(monto){
        if (this.saldo >= monto && this._activa) {
            this.saldo -= monto;
        }else{
            console.log("No se puede retirar el monto");
        }
    }
    mostrarInformacion(){
        console.log(`Numero de cuenta: ${this._numeroCuenta}`);
        console.log(`Titular: ${this._titular}`);
        console.log(`Saldo: ${this._saldo}`);
        console.log(`Activa: ${this._activa}`);
    }
}

const cuenta1 = new CuentaBancaria("123456", "Juan", 1000, true);
cuenta1.mostrarInformacion();
cuenta1.Retirar(1000);
cuenta1.mostrarInformacion();
