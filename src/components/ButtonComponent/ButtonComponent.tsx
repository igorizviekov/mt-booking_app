import styled, { css } from 'styled-components';
import { IButtonProps } from './buttonComponent.types';
import React from 'react';
import { IStyledButton } from './buttonComponent.types';
import defaultStyles from './.styles';

const Button = styled.button<IStyledButton>`
  ${defaultStyles}
  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

export const ButtonComponent: React.FC<IButtonProps> = ({ type, ...rest }) => {
  return (
    <Button
      primary={type === 'primary'}
      {...rest}
    />
  );
};
