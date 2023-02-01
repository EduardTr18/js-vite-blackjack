import { pedirCarta } from "./pedir-carta";
import { acumularPuntos } from "./acumular-puntos";
import { agregarCarta } from "./agregar-carta";

/**
 * Turno de la computadora
 * @param {Array<String>} deck mazo de cartas
 * @param {Array<Number>} puntosJugadores Puntos de todos los jugadores
 * @param {HTMLElement} puntosHTML HTML para mostrar los puntos
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} divCartasJugador HTML que contiene los divs de las cartas
 */
export const turnoComputadora = (deck, puntosJugadores, puntosHTML, puntosMinimos, divCartasJugador) => {
    let puntosComputadora = 0;
    do {
        const cartaDada = pedirCarta(deck);
        puntosComputadora = acumularPuntos(puntosJugadores, puntosHTML, cartaDada, puntosJugadores.length - 1);
        agregarCarta(divCartasJugador, cartaDada, puntosJugadores.length - 1);
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);
};
