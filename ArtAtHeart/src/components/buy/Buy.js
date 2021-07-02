import React, { useEffect, useState } from 'react'
import GooglePayButton from '@google-pay/button-react';
import { Helmet } from "react-helmet"
import { update} from '../../service/arts.js'
import './Buy.css'
import Paypalv2 from '../paypal-v2/Paypal-v2.js'

export default function Buy(props) {
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  let itemInfo = props.location.state.info;
  let src = itemInfo.itemSrc
  let price = itemInfo.itemPrice
  let paymentPrice = String(price)
  let artist = itemInfo.itemArtist
  let artName = itemInfo.itemArtName
  console.log(itemInfo)
  const onSuccess = async () => {
    setPaymentSuccess(true)
    updateBought()
  }

  const updateBought = async () => {

    if (paymentSuccess === true) {

      itemInfo.ifBought = 1;
      await update("arts" + itemInfo.id, itemInfo);
    }
  }
  return (
    <div className='buyPage'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Buy | Art At Heart</title>
      </Helmet>
      <div className='buyPageDiv'>
        <div className='section'>
          <div className='section1'>
            <h1 className='h1Buy'>{artName}</h1>
            <img src={src} className='itemImg' />
            <br />
            <h1 className='h1Buy'>{artist}</h1>
          </div>
          <hr />
          <div className='section2'>
            <Paypalv2 onSuccess={onSuccess} />
            <GooglePayButton
              environment="TEST"
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                buttonSizeMode: 'fill',
                className: 'google-pay-btn',
                allowedPaymentMethods: [
                  {
                    type: 'CARD',
                    parameters: {
                      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                      allowedCardNetworks: ['MASTERCARD', 'VISA'],
                    },
                    tokenizationSpecification: {
                      type: 'PAYMENT_GATEWAY',
                      parameters: {
                        gateway: 'example',
                      },
                    },
                  },
                ],
                merchantInfo: {
                  merchantId: '12345678901234567890',
                  merchantName: 'Demo Merchant',
                },
                transactionInfo: {
                  totalPriceStatus: 'FINAL',
                  totalPriceLabel: 'Total',
                  totalPrice:String(paymentPrice),
                  currencyCode: 'USD',
                  countryCode: 'US',
                },
              }}
              onLoadPaymentData={paymentRequest => {
                console.log('load payment data', paymentRequest);
              }}
              onPaymentAuthorized={paymentDate => {
                onSuccess()
              }}
            />
            <p className='pricee'>total-- {price}$</p>
          </div >
        </div>
      </div>
    </div>
  )
}
