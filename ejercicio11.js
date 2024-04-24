//ngresar una palabra e identificar la letras distintas y sus repeticiones. Por ejemplo: PALA (P = 1, A = 2, L = 1). Utilizar un objeto literal
function contarRepeticiones(palabra) {
    let repeticiones = {};

    for (let letra of palabra) {
        if (repeticiones[letra]) {
            repeticiones[letra]++;
        } else {
            repeticiones[letra] = 1;
        }
    }

    return repeticiones;
}

const palabra = "botella";
const resultado = contarRepeticiones(palabra);
console.log("Repeticiones de letras:", resultado);
