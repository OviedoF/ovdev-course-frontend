import { ACTIVE_SCREEN, DESACTIVE_SCREEN } from "../types";

export const activeScreen = (screen, message) => ({
    type: ACTIVE_SCREEN,
    payload: screen,
    message: message
});

export const desactiveScreen = (screen) => ({
    type: DESACTIVE_SCREEN,
    payload: screen
});