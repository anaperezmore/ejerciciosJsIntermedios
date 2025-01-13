const numero = parseInt(prompt("Introduce un número entero:"));

if (numero >= 1){
    let producto = 1;
    for (let i = 1; i <= numero; i++) {
        producto *= i;
    }
}
console.log(`El producto de todos los números desde 1 hasta ${numero} es: ${producto}`);
