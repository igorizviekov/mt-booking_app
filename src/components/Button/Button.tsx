import { IButtonProps } from './button.types';
import React from 'react';
import { StyledButton } from './styles';

export const Button: React.FC<IButtonProps> = ({ styleType, ...rest }) => {
  return (
    <StyledButton
      styleType={styleType}
      {...rest}
    />
  );
};
