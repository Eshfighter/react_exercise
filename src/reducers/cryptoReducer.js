import actionTypes from '../actions/actionTypes';

export default function cryptoReducer(state = [], action){
  const { type } = action;
  switch (type) {
    case actionTypes.GET_CRYPTO_INFO:
      return action.cryptoData;
    default:
      return state;

  }
}
