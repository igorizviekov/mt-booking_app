import React, { useEffect, useState } from 'react';
import { IInputProps } from './inputComponent.types.d';
import './styles.scss';

export const InputComponent: React.FC<IInputProps> = ({
  border,
  dark,
  disabled,
  error,
  errorMessage,
  inputValueReciever,
  ...rest
}) => {
  const [value, setValue] = useState<string>('');

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (inputValueReciever) {
      inputValueReciever(value);
    }
  }, [value, inputValueReciever]);

  return (
    <div className='input-wrapper'>
      <input
        value={value}
        onChange={inputChangeHandler}
        className='input-wrapper__input'
        disabled={disabled}
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
