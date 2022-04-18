import { combineReducers } from "redux";
import { lifeExpectancyReducer } from "./LifeExpectancy/lifeExpectancy-reducer";
import { usersReducer } from "./User/user-reducer";

export const rootReducer = combineReducers({
    user: usersReducer,
    lifeExpectancy: lifeExpectancyReducer
});