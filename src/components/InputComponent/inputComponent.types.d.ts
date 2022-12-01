import { HTMLAttributes } from 'react';

enum Rounded {
  rounded = 'rounded',
  normal = 'normal',
}

/**
 * Types for Input
 * @param {string} border - Set border radius
 * @param {boolean} dark - Dark theme
 * @param {boolean} disabled - Disable input
 * @param {string} error - Set the error
 */

export interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  border: Rounded.normal | Rounded.rounded;
  dark: boolean;
  disabled: boolean;
  error: boolean;
  errorMessage: string;
}
