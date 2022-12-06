import { HTMLAttributes } from 'react';

/**
 * Types for typography component
 * @param {size} number - Size of the text (pixels)
 * @param {label} string - Text content of the compopnent
 */

export interface ITypographyProps extends HTMLAttributes<HTMLSpanElement> {
  size: number;
  label: string;
}
