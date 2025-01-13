const frase = prompt("Introduce una frase");
const numeroDePalabras = frase.trim().split(/\s+/).length;


console.log(`La frase tiene ${numeroDePalabras} palabras.`);
alert(`La frase tiene ${numeroDePalabras} palabras.`);