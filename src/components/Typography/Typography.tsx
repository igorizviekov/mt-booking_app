import React from 'react';
import { ITypographyProps } from './typography.types';

export const Typography: React.FC<ITypographyProps> = (props) => {
  return (
    <span
      className='mb-4
      text-text-color-1
      dark:text-white
      sm:ml-2
      md:ml-8
      lg:ml-24
      xl:ml-34'
      style={{ fontSize: `${props.size}px` }}
      {...props}>
      {props.label}
    </span>
  );
};
