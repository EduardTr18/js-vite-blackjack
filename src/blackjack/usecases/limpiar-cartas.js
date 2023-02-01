/**
 * Esta funcion limpia las cartas de un DIV
 * @param {HTMLElement} divCartasJugador selecciona el div donde esten las cartas
 */
export const limpiarCartas = (divCartasJugador) => {
    divCartasJugador.forEach((elemento) => {
        while (elemento.firstElementChild) {
            elemento.removeChild(elemento.firstElementChild);
        }
    });
};
