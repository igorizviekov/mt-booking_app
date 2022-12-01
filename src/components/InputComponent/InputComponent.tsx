import React from 'react';
import { IInputProps } from './inputComponent.types';
import './styles.scss';

export const InputComponent: React.FC<IInputProps> = ({
  border,
  dark,
  disabled,
  error,
  errorMessage,
  ...rest
}) => {
  return (
    <div className='input-wrapper'>
      <input
        className='input-wrapper__input'
        disabled={disabled}
        {...rest}
        style={{
          borderRadius: `${border === 'rounded' ? '50px' : ''}`,
          background: `${dark ? 'black' : 'white'}`,
          color: `${dark ? 'white' : 'black'}`,
          border: `${error ? '2px solid red' : ''}`,
        }}
      />
      {error && <div className='input-wrapper__error'>{errorMessage}</div>}
    </div>
  );
};
