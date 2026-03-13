const {ejercicio1, ejercicio2, ejercicio3 } = require('./03f_ejercicios_testables');

test("1. Calculadora de viaje", () => {
    expect( ejercicio1(1, 2, 3)).toBe(6); // función y vaor esperado
});

test("2. Calculadora canina", () => {
    expect( ejercicio2(7) ).toBe(49);
});

test("3. Calculadora de IMC", () => {
    expect( ejercicio3(69, 170) ).toBeCloseTo(0.41, 2); // función y valor aproximado a 2 dígitos
});

