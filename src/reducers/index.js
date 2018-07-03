import { combineReducers } from 'redux';
import crypto from './cryptoReducer';

const rootReducer = combineReducers({
    crypto
});

export default rootReducer;
