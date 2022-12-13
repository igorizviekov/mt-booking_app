import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'antd';

export const PaymentForm = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe!.createPaymentMethod({
      type: 'card',
      card: elements!.getElement(CardElement)!,
    });

    if (!error) {
      try {
        const id = paymentMethod;
        const response = await axios.post('', {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          console.info('successful payment');
          setSuccess(true);
        }
      } catch (err) {
        console.error('Error');
      }
    } else {
      console.error(error.message);
    }
  };

  return (
    <>
      {!success ? (
        <form
          onSubmit={handleSubmit}
          className='border-gray-300 border-2 rounded-lg p-4'>
          <h4 className='text-xl font-bold mb-4'>Make your purchse now!</h4>
          <fieldset>
            <div>
              <CardElement />
            </div>
          </fieldset>
          <Button
            type='primary'
            className='mt-10'>
            Pay
          </Button>
        </form>
      ) : (
        <div className='border-gray-300 border-2 rounded-lg p-4'>
          <h4 className='text-2xl font-bold mb-4'>
            You've just made a good purchase
          </h4>
        </div>
      )}
    </>
  );
};
