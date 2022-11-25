/**
 * Types for typography component
 * @param {number} size - Size of the text (pixels)
 * @param {string} label - Text content of the compopnent
 */

export interface ITypographyProps extends Partial<HTMLHeadingElement> {
  size: number;
  label: string;
}
