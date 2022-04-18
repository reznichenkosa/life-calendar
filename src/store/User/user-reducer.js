import { SET_USER, CLEAR_USER } from "./user-actions";

export const usersReducer = (state={}, action) => {
    switch (action.type) {
        case SET_USER:
            return action.payload;
        case CLEAR_USER:
            return {};
        default:
            return state;
    }
}