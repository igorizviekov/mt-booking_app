import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { PaymentForm } from '../PaymentForm';
import { IStripeContainerProps } from './stripeContainer.types';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC!);

export const StripeContainer: React.FC<IStripeContainerProps> = ({
  price,
  booking,
}) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm
        price={price}
        booking={booking}
      />
    </Elements>
  );
};
