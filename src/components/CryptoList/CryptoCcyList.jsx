import React from 'react';
import numeral from 'numeral';

import mockData from '../../api/data';

const css = require('./CryptoCcyList.css');

export default class CryptoCcyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const cryptoCurrencies = this.props.cryptoCurrencies || [];
        return (cryptoCurrencies.map((cryptoCurrency, idx)=>{
            return <div className={css.cryptoRow} key={idx}>
                        <div className={css.cryptoName}>{cryptoCurrency.name}</div>
                        <div className={css.cryptoPrice}>{`${this.props.currencySelected} ${numeral(cryptoCurrency[`price_${this.props.currencySelected.toLowerCase()}`]).format('0,0.00')}`}</div>
                        <div className={(cryptoCurrency.percent_change_24h >= 0)?(css.cryptoChangePositive):(css.cryptoChangeNegative)}>{`${cryptoCurrency.percent_change_24h}%`}</div>
                    </div>
        }))
    }
}
