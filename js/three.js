const numero = parseInt(prompt("Ingresa un número:"))
const divisores = [2,3,5,7]

const divisibles = divisores.filter ( divisor => numero % divisor === 0)

if (divisibles.length > 0) {
    console.log(`El número ${numero} es divisible por: ${divisibles.join(", ")}`);
} 

else {
   
console.log(`El número ${numero} no es divisible por 2, 3, 5 ni 7.`);
}