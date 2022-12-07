import styled, { css } from 'styled-components';
import { IButtonProps } from './button.types';

export const StyledButton = styled.button<IButtonProps>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.styleType === 'primary' &&
    css`
      background: palevioletred;
      color: white;
    `};
`;
