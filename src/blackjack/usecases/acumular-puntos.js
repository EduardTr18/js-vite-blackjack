import { valorCarta } from "./valor-carta";
/**
 * Esta funcion acumula los puntos de cada jugador y ademas los muestra en el DOM
 * @param {Array<string>} jugadores array de jugadores
 * @param {HTMLElement} jugadoresHTML HTML para actualizar los puntos de los jugadores
 * @param {String} carta carta del jugador
 * @param {Number} turno turno del jugador
 * @returns {Number}retorna los puntos del jugador
 */
export const acumularPuntos = (jugadores, jugadoresHTML, carta, turno) => {
    jugadores[turno] += valorCarta(carta);

    jugadoresHTML[turno].innerHTML = jugadores[turno];
    return jugadores[turno];
};
