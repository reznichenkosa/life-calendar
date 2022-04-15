import { ADD_USER, GET_USER_BY_ID } from "./users-actions";

export const usersReducer = (state=[], action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                user: action.payload
            };
        case GET_USER_BY_ID:
            return {
                user: action.payload
            }
        
    }
}