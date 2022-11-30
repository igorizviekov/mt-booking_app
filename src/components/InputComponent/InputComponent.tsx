import React from 'react';
import { IInputComponentProps } from './inputComponent.types';

export const InputComponent: React.FC<IInputComponentProps> = ({
  border,
  dark,
  ...rest
}) => {
  return (
    <input
      {...rest}
      style={{
        borderRadius: `${border === 'rounded' ? '50px' : ''}`,
        background: `${dark ? 'black' : 'white'}`,
        color: `${dark ? 'white' : 'black'}`,
      }}
    />
  );
};
