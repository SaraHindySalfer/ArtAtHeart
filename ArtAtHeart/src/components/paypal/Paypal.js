import React from 'react';
import {useHistory} from 'react-router-dom'
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default function Paypal(props) {
    let history=useHistory()
    const onSuccess = (payment) => {
        alert('payment succeded')
        history.push('/')
        console.log("The payment was succeeded!", payment)
    }

    const onCancel = (data) => {
        console.log('The payment was cancelled!', data);
    }

    const onError = (err) => {
        console.log("Error!", err);
    }

    let env = 'sandbox';
    let currency = 'USD';
    let total ='1' /* props.price */;
    const client = {
        sandbox: 'AejSe1bZ20dmNCws-RAGjVhOWrY7X1DX3ZFni6XZHCHI8nbYBiiSdwQXX9qBQZU8kjKPHEBqrY5gjCvr',
        production: 'YOUR-PRODUCTION-APP-ID',
    }
    return (
        <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
    );
}
