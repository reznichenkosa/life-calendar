export const ADD_USER = '@@users/ADD_USER';
export const GET_USER_BY_ID = '@@users/GET_USER_BY_ID';

export const addUser = (newUser) => ({
    type: ADD_USER,
    payload: newUser
})

export const getUserById = (userId) => ({
    type: GET_USER_BY_ID,
    payload: userId
})