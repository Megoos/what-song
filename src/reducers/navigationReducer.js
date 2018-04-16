import actionTypes from '../constants/actionTypes';

const initialState = {
    currentScreen: 'SplashScreen',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NAVIGATE:
            return {
                currentScreen: action.payload
            };
        case actionTypes.LOGOUT:
            return {
                currentScreen: 'LoginScreen'
            };
        default:
            return state;
    }
};