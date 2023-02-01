/**
 * Esta funcion determinar quien es el ganadador
 * @param {Array<Number>} puntosJugadores Array puntos de jugadores
 */
export const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        if (puntosMinimos > 21) {
            alert("La computadora Gana");
        } else if (puntosComputadora > 21) {
            alert("El jugadora Gana");
        } else if (puntosMinimos === puntosComputadora) {
            alert("Empate entre ambos jugadores");
        } else {
            alert("La computadora Gana");
        }
    }, 100);
};
