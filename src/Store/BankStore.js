import {createStore, applyMiddleware} from 'redux';
import BankReducer from '../reducers/BankReducer';

const logger = (state) => (next) => (action) =>{
    console.log('dispatch',action);
    return next(action);
}

const BankStore = createStore(
    BankReducer,
    applyMiddleware(logger)
)

export default BankStore;