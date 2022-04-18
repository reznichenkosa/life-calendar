export const SET_LIFE_EXPECTANCY = '@@lifeExpectancy/SET_LIFE_EXPECTANCY';
export const CLEAR_LIFE_EXPECTANCY = '@@lifeExpectancy/CLEAR_LIFE_EXPECTANCY';

export const setLifeExpectancy = (lifeExpectancy) => ({
    type: SET_LIFE_EXPECTANCY,
    payload: lifeExpectancy
});

export const clearLifeExpectancy = () => ({
    type: CLEAR_LIFE_EXPECTANCY
})