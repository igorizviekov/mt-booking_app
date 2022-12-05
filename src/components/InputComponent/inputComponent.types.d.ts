import { HTMLAttributes } from 'react';

/**
 * Types for Input
 * @param {border} string - Set border for the input
 * @param {dark} boolean - Set dark theme
 * @param {error} boolean - Set error
 * @param {errorMessage} string - Set error message
 */

export interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  border: 'normal' | 'rounded';
  dark: boolean;
  error: boolean;
  errorMessage: string;
}
