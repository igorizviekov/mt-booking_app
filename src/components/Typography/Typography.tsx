import React from 'react';

interface TypographyProps {
  size: number;
  label: string;
}

export const Typography: React.FC<TypographyProps> = ({ size, label }) => {
  return (
    <h2
      className='mb-4 text-4xl text-text-color-1 lg:tracking-widest dark:text-white'
      style={{ fontSize: `${size}px` }}>
      {label}
    </h2>
  );
};
