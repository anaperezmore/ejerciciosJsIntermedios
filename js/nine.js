const numbers =  [8, 15, 23, 42, 16, 4, 10, 7, 19]
let suma = 0;


for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) { // Se comprueba si el índice es par
        suma += numbers[i];
    }
}


console.log("La suma de los elementos en posiciones pares es:", suma);
