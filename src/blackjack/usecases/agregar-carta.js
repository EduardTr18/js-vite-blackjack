/**
 * Esta funcion agrega una carta al DOM
 * @param {HTMLElement} divCartasJugador HTML para agregar una carta al div
 * @param {String} cartaDada Carta
 * @param {Number} turno Turno del jugador
 */
export const agregarCarta = (divCartasJugador, cartaDada, turno) => {
    const carta = document.createElement("img");
    carta.classList.add("carta");
    carta.src = `assets/img/${cartaDada}.png`;
    carta.alt = "carta-imagen";

    divCartasJugador[turno].appendChild(carta);
};
