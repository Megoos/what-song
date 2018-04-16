import actionTypes from '../constants/actionTypes';

export const navigate = (screen) => ({
    type: actionTypes.NAVIGATE,
    payload: screen
});