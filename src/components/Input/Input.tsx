import React from 'react';
import { IInputProps } from './input.types';
import './styles.scss';

export const Input: React.FC<IInputProps> = ({
  border,
  dark,
  error,
  errorMessage,
  className,
  ...rest
}) => {
  const inputClassNames = ['input-wrapper__input', className]
    .filter(Boolean)
    .join(' ');
  return (
    <div className='input-wrapper'>
      <input
        className={inputClassNames}
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
