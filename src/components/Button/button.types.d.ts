import { HTMLAttributes } from 'react';

/**
 * Types for Button
 * @param {styleType} string - set or secondary primary style of the button
 */

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  styleType?: 'primary' | 'secondary';
}
