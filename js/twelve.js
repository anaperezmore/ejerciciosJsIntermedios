const opciones = ["Piedra", "Papel", "Tijera"];

// Función para jugar
function jugar() {
    
    const eleccionUsuario = prompt("Elige entre Piedra, Papel o Tijera:");

    // Validar la entrada
    if (!opciones.includes(eleccionUsuario)) {
        alert("Elección inválida. Debes elegir entre Piedra, Papel o Tijera.");
        return;
    }

    // Elegir aleatoriamente una opción para la computadora
    const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

    // Comparar las elecciones y determinar el ganador
    let resultado;
    if (eleccionUsuario === eleccionComputadora) {
        resultado = "¡Es un empate!";
    } else if (
        (eleccionUsuario === "Piedra" && eleccionComputadora === "Tijera") ||
        (eleccionUsuario === "Papel" && eleccionComputadora === "Piedra") ||
        (eleccionUsuario === "Tijera" && eleccionComputadora === "Papel")
    ) {
        resultado = "¡Ganaste!";
    } else {
        resultado = "¡Perdiste!";
    }

    // Mostrar el resultado
    alert(`Tu elección: ${eleccionUsuario}\nElección de la computadora: ${eleccionComputadora}\nResultado: ${resultado}`);
}

// Iniciar el juego
jugar();
