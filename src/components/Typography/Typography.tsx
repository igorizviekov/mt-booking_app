import React from 'react';

interface TypographyProps {
  size: number;
  label: string;
}

export const Typography: React.FC<TypographyProps> = ({ size, label }) => {
  return (
    <h2
      className='mb-4
      text-text-color-1
      dark:text-white
      sm:ml-2
      md:ml-8
      lg:ml-24
      xl:ml-34'
      style={{ fontSize: `${size}px` }}>
      {label}
    </h2>
  );
};
