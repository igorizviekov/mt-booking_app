import styled, { css } from 'styled-components';
import { IButtonProps } from './button.types';
import React from 'react';
import { IStyledButton } from './button.types';
import defaultStyles from './.styles';

const StyledButton = styled.button<IStyledButton>`
  ${defaultStyles}
  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

export const Button: React.FC<IButtonProps> = ({ type, ...rest }) => {
  return (
    <StyledButton
      primary={type === 'primary'}
      {...rest}
    />
  );
};
