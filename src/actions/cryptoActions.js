import actionTypes from './actionTypes';
import { getCryptoData } from '../api/api';

export const getCryptoInfo = (cryptoData) => {
  const type = actionTypes.GET_CRYPTO_INFO;
  return { type, cryptoData };
};

export function loadCryptoInfo(currency){
  return (dispatch) =>{
    return getCryptoData(currency).then(cryptoData => {
      dispatch(getCryptoInfo(cryptoData));
    }).catch(err => {
      console.error(' ERROR :: Failed to load data', ' Error info ', err);
      throw(err);
    });
  };
}
