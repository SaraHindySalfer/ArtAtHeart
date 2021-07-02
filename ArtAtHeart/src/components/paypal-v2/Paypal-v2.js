import { PayPalButton } from "react-paypal-button-v2";
import React from 'react'

export default function Paypalv2(props) {
    const onSuccess=props.onSuccess
    return (
        <div>
            <PayPalButton className='paypal-buttons'
                amount="0.01"
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={onSuccess}
                options={{
                    clientId: "AYLPXeNk11chPCJnEIpl6f1bc7Sga0-95QylDgx_HjshKK5WaqJHnZWa0acWv04dMDqmD5r6XTd0L66R"
                }}
            />
        </div>
    )
}
