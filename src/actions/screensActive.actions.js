import { ACTIVE_SCREEN, DESACTIVE_SCREEN } from "../types";

export const activeScreen = (screen) => ({
    type: ACTIVE_SCREEN,
    payload: screen
});

export const desactiveScreen = (screen) => ({
    type: DESACTIVE_SCREEN,
    payload: screen
});