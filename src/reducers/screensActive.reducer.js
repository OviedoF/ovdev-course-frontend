import { ACTIVE_SCREEN, DESACTIVE_SCREEN } from "../types";

const initialState = {
    isLoading: false,
    errorMessage: false,
    successMessage: false
}

export default function screensActiveReducer(state = initialState, action){
    switch (action.type) {
        case ACTIVE_SCREEN:
            return {
                ...state,
                [action.payload]: true
            }
        case DESACTIVE_SCREEN:
            return {
                ...state,
                [action.payload]: false
            }
        default:
            return state
    }
};