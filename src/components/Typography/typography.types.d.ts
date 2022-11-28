import { HTMLAttributes } from 'react';

/**
 * Types for typography component
 * @param {number} size - Size of the text (pixels)
 * @param {string} label - Text content of the compopnent
 */

export interface ITypographyProps extends HTMLAttributes<HTMLSpanElement> {
  size?: number;
  label?: string;
  // [propName: string]: any;
}
