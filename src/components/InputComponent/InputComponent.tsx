import React, { useEffect, useState } from 'react';
import { IInputProps } from './inputComponent.types.d';
import './styles.scss';

export const InputComponent: React.FC<IInputProps> = ({
  border,
  dark,
  error,
  errorMessage,
  inputValueReciever,
  ...rest
}) => {
  return (
    <div className='input-wrapper'>
      <input
        className='input-wrapper__input'
        style={{
          borderRadius: `${border === 'rounded' ? '50px' : ''}`,
          background: `${dark ? 'black' : 'white'}`,
          color: `${dark ? 'white' : 'black'}`,
          border: `${error ? '2px solid red' : ''}`,
        }}
        {...rest}
      />
      {error && <div className='input-wrapper__error'>{errorMessage}</div>}
    </div>
  );
};
