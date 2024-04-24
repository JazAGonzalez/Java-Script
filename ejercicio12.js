//Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. Agregar varios elementos a una lista. Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres.
const persona1 = {
    nombre: "Jazmin",
    sexoBiologico: "M",
    edad: 18
}
const persona2 = {
    nombre: "Bianca",
    sexoBiologico: "M",
    edad: 19
}
const persona3 = {
    nombre: "Facundo",
    sexoBiologico: "H",
    edad:28 
}
const persona4 = {
    nombre: "Martin",
    sexoBiologico: "H",
    edad:35
}

const personas = [persona1, persona2, persona3, persona4];

const personasPorGenero = {};

personas.forEach(persona => {
    if (!personasPorGenero[persona.sexoBiologico]) {
        personasPorGenero[persona.sexoBiologico] = [];
    }
    personasPorGenero[persona.sexoBiologico].push(persona);
});

const totalPersonas = personas.length;
const sumaEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
const promedioEdadTotal = sumaEdades / totalPersonas;

const mujeres = personasPorGenero["M"] || [];
const sumaEdadesMujeres = mujeres.reduce((acumulador, persona) => acumulador + persona.edad, 0);
const promedioEdadMujeres = mujeres.length > 0 ? sumaEdadesMujeres / mujeres.length : 0;

const mujerMayorEdad = mujeres.reduce((mayorEdad, persona) => (persona.edad > mayorEdad.edad ? persona : mayorEdad), {edad: -Infinity});

const hombres = personasPorGenero["H"] || [];
const hombreMenorEdad = hombres.reduce((menorEdad, persona) => (persona.edad < menorEdad.edad ? persona : menorEdad), {edad: Infinity});

console.log("Promedio de edad total:", promedioEdadTotal);
console.log("Promedio de edad de las mujeres:", promedioEdadMujeres);
console.log("Nombre de la mujer con mayor edad:", mujerMayorEdad.nombre);
console.log("Nombre del hombre con menor edad:", hombreMenorEdad.nombre);