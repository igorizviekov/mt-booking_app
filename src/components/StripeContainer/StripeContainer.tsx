import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { PaymentForm } from '../PaymentForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC!);

export const StripeContainer = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};
