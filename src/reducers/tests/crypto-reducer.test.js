import React from 'react';
import expect from 'expect';
import cryptoReducer from '../cryptoReducer';
import * as actions from '../../actions/cryptoActions';

describe(`cryptoReducer works as expected`, () => {
    it(`cryptoReducer adds data to store`, () => {
      const intialState = [];
  
      const newCryptoAction = actions.getCryptoInfo({ crypto: 'A'});
  
      const state = cryptoReducer(intialState, newCryptoAction);
  
      // Assertion
      expect(state.crypto).toBe('A');
    });
});