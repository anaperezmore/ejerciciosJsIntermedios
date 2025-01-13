const fechaNacimiento = prompt("Introduce tu fecha de nacimiento (en formato YYYY-MM-DD):");

// Convertir la fecha a un objeto Date
const nacimiento = new Date(fechaNacimiento);

// Fecha actual
const hoy = new Date();

// Diferencia en milisegundos
const diferenciaMs = hoy - nacimiento;

// Diferencia de milisegundos a días
const edadEnDias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));

// Mostrar el resultado
console.log(`Tu edad en días es: ${edadEnDias}`);
alert(`Tu edad en días es: ${edadEnDias}`);
