import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'antd';
import { IStripeContainerProps } from '../StripeContainer/stripeContainer.types';

export const PaymentForm: React.FC<IStripeContainerProps> = ({
  price,
  booking,
}) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const stripe = useStripe();
  const elements = useElements();

  const bookingTime: number = booking
    ? (booking[1]['$d'].getTime() - booking[0]['$d'].getTime()) /
      1000 /
      60 /
      60 /
      24
    : 0;

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe!.createPaymentMethod({
      type: 'card',
      card: elements!.getElement(CardElement)!,
    });

    if (!error) {
      try {
        const id = paymentMethod;
        const response = await axios.post('', {
          amount: Math.floor(bookingTime) * price,
          id,
        });

        if (response.data.success) {
          console.info('successful payment');
          setSuccess(true);
        }
      } catch (err) {
        setShowModal(false);
        console.error('Error');
      }
    } else {
      setShowModal(false);
      console.error(error.message);
    }
  };

  return (
    <>
      {!success ? (
        <form className='border-gray-100 border-2 rounded-lg p-4'>
          <Modal
            onCancel={() => setShowModal(false)}
            open={showModal}
            footer={[
              <Button
                key={1}
                type='primary'
                onClick={handleSubmit}>
                Pay
              </Button>,
            ]}>
            <span>Are you sure you want to book this item for ${price}</span>
          </Modal>
          <h4 className='text-xl font-bold mb-4'>Make your purchse now!</h4>
          <fieldset>
            <div>
              <CardElement />
            </div>
          </fieldset>
          <Button
            onClick={() => setShowModal(true)}
            type='primary'
            className='mt-10'
            disabled={price <= 0}>
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
