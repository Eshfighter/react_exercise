import React from 'react';
import { connect } from 'react-redux';

import CryptoCcyList from './CryptoList/CryptoCcyList';
import currencies from '../api/currency-data';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import { loadCryptoInfo } from '../actions/cryptoActions';
import { getCryptoData } from '../api/api';

const css = require('./HomePage.css');

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: "Select a currency",
            currencySelected: 'SGD'
        };
        this.toggleSelected=this.toggleSelected.bind(this);
        this.fetchCryptoData=this.fetchCryptoData.bind(this);
        this.fetchCryptoData('SGD');
    }

    toggleSelected(selectedItem){
        const currencySelected = selectedItem;
        const label = selectedItem;
        const newState = { currencySelected, label };
        this.setState(newState, () =>{
            console.log('State updated');
            this.fetchCryptoData(selectedItem);
        });
        
    }

    fetchCryptoData(currency){
        this.props.getCryptoInfo(currency).then(()=>{
            console.log('Fetch crypto data is successful');
        });
    }

    render() {
        const currencySelected = `${this.state.currencySelected}`;
        const cryptoCurrencies = this.props.cryptoCurrencies;
        return (
            <div> 
                <h1 className={css.titleHeader}> Top 5 Cryptocurrency Summary </h1>
                <DropdownMenu 
                    label={this.state.label} 
                    list={currencies} 
                    toggleItem={this.toggleSelected}/>
                <div className={css.listWrapper}>
                    <div className={css.headerWrapper}>
                        <div className={css.headerTitleCrypto}>Cryptocurrencies</div>
                        <div className={css.headerTitlePrice}>Price({currencySelected})</div>
                        <div className={css.headerTitleChange}>Change(24h)</div>
                    </div>
                    <CryptoCcyList 
                    currencySelected={currencySelected} 
                    cryptoCurrencies={cryptoCurrencies}/>
                </div>    
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cryptoCurrencies: state.crypto || [],
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getCryptoInfo: (currency) => dispatch(loadCryptoInfo(currency))
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
