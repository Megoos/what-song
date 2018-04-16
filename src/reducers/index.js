import {combineReducers} from 'redux';
import masterData from './masterDataReducer';
import loginForm from './loginFormReducer';
import navigation from './navigationReducer';
export default combineReducers({
    masterData,
    loginForm,
    navigation
});