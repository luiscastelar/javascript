# Día 3: Los tipos y objetos

## Ámbito
+ [Existencia y valor de variables](https://apuntes.luis-ferreira.es/lmsgi/T5_Javascript/3_ambito_de_variables)
+ [Ejemplos](03_ambito.js)

## Tipos
+ [Tipos de datos](https://apuntes.luis-ferreira.es/lmsgi/T5_Javascript/4_tipos_de_datos)
+ [Ejemplos](03b_datos_primitivos.js)
+ [Ejemplos de cohercion](03c_cohercion.js)

## Operadores
+ [Los normales y los modernos](https://apuntes.luis-ferreira.es/lmsgi/T5_Javascript/5_operadores)
+ [Ejemplos](03d_operadores.js)

## Ejercicios
+ [A practicar](https://apuntes.luis-ferreira.es/lmsgi/T5_Javascript/#ejercicios)
+ [Soluciones](03e_ejercicios.js)

## Test unitarios

Para ayudaros en la práctica he generado algunos test unitarios con `jest`.

Para utilizarlos deberemos:
1. Instalar `jest` con `npm install --save-dev jest`
2. Añadir el script "test" al `package.json`:
   ```json
   {
        "devDependencies": {
            "@eslint/js": "^10.0.1",
            "eslint": "^10.0.0",
            "globals": "^17.3.0",
            "jest": "^30.3.0"
        },
        "scripts": {
            "test": "jest"
        }
    }
   ```
3. Exportar las funciones a probar: `module.exports = { ejercicio1, ... }`
4. Importarlas en el archivo de test: `const {ejercicio1, ejercicio2, ejercicio3 } = require('./03f_ejercicios_testables');` (debe llamarse XXX.test.js para que `jest` lo encuentre
5. Correr los test con `npm test`