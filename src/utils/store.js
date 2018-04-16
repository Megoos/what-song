import { applyMiddleware, createStore, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getMiddleware = () => {
    const commonMiddleware = [thunk, promiseMiddleware()];

    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(...commonMiddleware);
    }

    return applyMiddleware(...commonMiddleware);
};

export default createStore(reducers, composeEnhancers(getMiddleware()));
