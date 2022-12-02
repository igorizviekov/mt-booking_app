import React, { useEffect, useState } from 'react';
import { IInputProps } from './inputComponent.types.d';
import './styles.scss';

export const InputComponent: React.FC<IInputProps> = ({
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
