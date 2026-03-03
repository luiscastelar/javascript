# Javascript

## Desarrollo y depuración

Instalar plugins para desarrollo: ESLint, Live Server, Project Manager

### ESLint
#### Instalación
```bash
npm install eslint --save-dev
npx eslint --init
```

#### Configuración
Añadiremos el archivo `eslint.config.mjs` en la raíz del proyecto:
```json
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
    { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
    {
        "rules": {
            "no-unused-vars": "off",
            "no-extra-semi": "error",
            "eqeqeq": "error",
            "camelcase": "error",
            "semi": ["error", "always"],
            "quotes": "error",
            "indent": "error",
            "array-bracket-spacing": "error",
            "arrow-spacing": "error"
        }
    }
]);
```

#### Ejecución
```bash
npx eslint --ext "js/recommended" --fix .
```

## Variables
Las [variables](01_variables_sin_declarar.js)

La [consola](01b_console.js)

El [try - catch](01c_try-catch.js)