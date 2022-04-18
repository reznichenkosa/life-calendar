import { CLEAR_LIFE_EXPECTANCY, SET_LIFE_EXPECTANCY } from "./lifeExpectancy-actions";

export const lifeExpectancyReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_LIFE_EXPECTANCY:
            return action.payload;
        case CLEAR_LIFE_EXPECTANCY:
            return {};
        default:
            return state;
    }
}