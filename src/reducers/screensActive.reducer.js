import { ACTIVE_SCREEN, DESACTIVE_SCREEN } from "../types";

const initialState = {
    isLoading: false,
    errorMessage: false,
    successMessage: false,
    message: ''
}

export default function screensActiveReducer(state = initialState, action){
    switch (action.type) {
        case ACTIVE_SCREEN:
            return {
                ...state,
                [action.payload]: true,
                message: action.message
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