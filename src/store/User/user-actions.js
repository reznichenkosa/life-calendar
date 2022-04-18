export const SET_USER = '@@users/SET_USER';
export const CLEAR_USER = '@@users/CLEAR_USER';

export const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

export const clearUser = () => ({
    type: CLEAR_USER
});