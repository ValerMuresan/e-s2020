import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HtZMuKmcUPkQizAKXqkHwiHovAvHd6do4GA4NvxmjbfEAqAx7rtz5Ouq1gEQay4ap32WUNsWFEw4FrdEgIwr7ls00qTKLDIJR';

    const onToken = token => {
        console.log(token);
        alert('Successful payment!');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='EShop Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}

        />
    );
};

export default StripeCheckoutButton;