/**
 * Esta funcion devuelve una carta del deck
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} Retorna un carta
 */
export const pedirCarta = (deck) => {
    return deck.length ? deck.shift() : mostrarError();
};

const mostrarError = () => {
    throw new Error("No hay cartas");
};
