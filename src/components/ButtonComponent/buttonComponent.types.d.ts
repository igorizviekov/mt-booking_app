import { HTMLAttributes } from 'react';

/**
 * Types for Button
 * @param {primary} boolean - primary style of the button
 * @param {secondary} boolean - secondary style of the button
 */

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: 'primary' | 'secondary';
}

/**
 * Types for Styled Button
 * @param {primary} boolean - primary style of the button
 * @param {secondary} boolean - secondary style of the button
 */

export interface IStyledButton {
  primary?: boolean;
  secondary?: boolean;
}
