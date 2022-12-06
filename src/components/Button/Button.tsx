import { IButtonProps } from './button.types';
import React from 'react';
import { StyledButton } from './styles';

export const Button: React.FC<IButtonProps> = ({ type, ...rest }) => {
  return (
    <StyledButton
      primary={type === 'primary'}
      {...rest}
    />
  );
};
