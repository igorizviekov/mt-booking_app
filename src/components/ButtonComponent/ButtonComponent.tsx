import styled, { css } from 'styled-components';
import { IButtonProps } from './buttonComponent.types';
import React from 'react';

const Button = styled.button<{ primary?: boolean; secondary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

export const ButtonComponent: React.FC<IButtonProps> = (props) => {
  return <Button {...props} />;
};
