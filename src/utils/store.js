import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';


const getMiddleware = () => {
    const commonMiddleware = [thunk, promiseMiddleware()];

    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(...commonMiddleware);
    }

    return applyMiddleware(...commonMiddleware, createLogger({collapsed: true}));
};

export default createStore(reducers, getMiddleware());
