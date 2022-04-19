import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisableKey =
    "pk_test_51KqGVUGnyie0RWkGJ8iaKgKNcAUI1XSkvAEOWIPe0u1qjaedZfVXKbXNxuGGwUs6bYYnscMvP7QMeWMxXF8jh0R300lU0HhnkX";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='Crwn Clothing Ltd'
      billingAddress
      shippingAddress
      image='http://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now '
      token={onToken}
      stripeKey={publisableKey}
    />
  );
};

export default StripeCheckoutButton;
