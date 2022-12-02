import { HTMLAttributes } from 'react';

enum Rounded {
  rounded = 'rounded',
  normal = 'normal',
}

/**
 * Types for Input
 * @param {type} string - Type of the input
 */

export interface IInputComponentProps extends HTMLAttributes<HTMLInputElement> {
  border: Rounded.normal | Rounded.rounded;
  dark: boolean;
}
