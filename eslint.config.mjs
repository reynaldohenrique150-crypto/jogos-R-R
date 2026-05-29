import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser // Isso avisa que seu código roda no navegador (HTML)
            }
        },
        rules: {
            "no-unused-vars": "warn", // Avisa se criar variável e não usar
            "no-undef": "error"       // Dá erro se usar algo que não existe
        }
    }
];
variavelQueNaoExiste = 
