const celsius = parseFloat(prompt("Introduce la temperatura en grados Celsius:"));

// Convertir a Fahrenheit usando la fórmula
const fahrenheit = (celsius * 9/5) + 32;

console.log(`${celsius}°C son equivalentes a ${fahrenheit.toFixed(2)}°F.`);
alert(`${celsius}°C son equivalentes a ${fahrenheit.toFixed(2)}°F.`);
