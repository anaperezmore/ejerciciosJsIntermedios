const numeros = [10,20,30,40,50];
const suma = numeros.reduce((acumulador,numero)=> acumulador + numero, 0)
const promedio = suma / numeros.length;

console.log(`El promedio de los numeros es : ${promedio}`)