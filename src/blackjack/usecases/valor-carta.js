/**
 * Esta funcion devuelve el valor de una carta
 * @param {String} carta Recibe una carta
 * @returns {Number} Retorna el valor de la carta
 */

export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return Number(valor) ? parseInt(valor) : valor === "A" ? 11 : 10;
};
