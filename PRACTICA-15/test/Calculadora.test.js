const Calculadora = require('../src/Calculadora');

describe('Calculadora', () => {
    test('suma de 2 + 3 = 5', () => {
        expect(Calculadora.sumar(2, 3)).toBe(5);
    });

    test('resta de 10 - 6 = 4', () => {
        expect(Calculadora.restar(10, 6)).toBe(4);
    });

    test('multiplicación de 3 * 4 = 12', () => {
        expect(Calculadora.multiplicar(3, 4)).toBe(12);
    });

    test('divición de 8 / 2 = 4', () => {
        expect(Calculadora.dividir(8, 2)).toBe(4);
    });

    test('dividir entre 0 lanza error', () => {
        expect(Calculadora.dividir(5,0)).toThrow(Error);
    });

})