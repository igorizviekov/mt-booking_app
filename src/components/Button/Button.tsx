import { IButtonProps } from './button.types';
import React from 'react';
import { StyledButton } from './styles';

export const Button: React.FC<IButtonProps> = (props) => {
  return <StyledButton {...props} />;
};
