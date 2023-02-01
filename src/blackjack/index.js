import { crearDeck, pedirCarta, turnoComputadora, acumularPuntos, agregarCarta, determinarGanador, limpiarCartas } from "./usecases";

(() => {
    "use strict";
    // Variables Globales
    let deck = [];
    const tipos = ["C", "D", "H", "S"];
    const especiales = ["A", "J", "Q", "K"];
    let puntosJugadores = [];
    // Selectores

    const btnNuevo = document.querySelector("#nuevo");
    const btnPedir = document.querySelector("#pedir");
    const btnDetener = document.querySelector("#detener");
    const divCartasJugador = document.querySelectorAll(".divCartas");
    // Puntos de Jugador y Computadora
    const puntosHTML = document.querySelectorAll("small");

    addEventListener("DOMContentLoaded", () => {
        desactivarBotones();
        btnPedir.addEventListener("click", () => {
            turnoJugador();
        });
        btnDetener.addEventListener("click", () => {
            detenerJuego();
        });
        btnNuevo.addEventListener("click", () => {
            inicializarJuego();
        });
    });

    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck(tipos, especiales);

        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        resetearJuego();
    };

    const turnoJugador = () => {
        const cartaDada = pedirCarta(deck);
        const puntosJugador = acumularPuntos(puntosJugadores, puntosHTML, cartaDada, 0);

        agregarCarta(divCartasJugador, cartaDada, 0);

        if (puntosJugador >= 21) {
            desactivarBotones();
            turnoComputadora(deck, puntosJugadores, puntosHTML, puntosJugadores[0], divCartasJugador);
            determinarGanador(puntosJugadores);
        }
    };

    const resetearJuego = () => {
        resetearPuntajes();
        limpiarCartas(divCartasJugador);
        activarBotones();
    };

    const detenerJuego = () => {
        desactivarBotones();
        turnoComputadora(deck, puntosJugadores, puntosHTML, puntosJugadores[0], divCartasJugador);
        determinarGanador(puntosJugadores);
    };

    const desactivarBotones = () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    };

    const resetearPuntajes = () => {
        puntosHTML.forEach((elem) => (elem.innerText = 0));
    };

    const activarBotones = () => {
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    };
})();
