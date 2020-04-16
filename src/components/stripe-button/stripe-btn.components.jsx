import React from 'react';
import StripeCheckout  from 'react-stripe-checkout';


const  StripeCheckOutBtn = ({price})=>{
    const stripePrice = price * 100; 
    const publishableKey = 'pk_test_RXMKhe3pI2oRHmSOAzW11s9F00ffuBsNbk';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful, thanks for your patronage')
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name='Sammy Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is ${price}`}
            amount={stripePrice}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckOutBtn;