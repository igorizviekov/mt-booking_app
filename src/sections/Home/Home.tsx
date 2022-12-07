import React from 'react';
import { HomeHero } from '../../components';
import { displayErrorMessage } from '../../lib/utils';

export const Home = () => {
  const onSearch = (value: string) => {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      window.location.href = '/listing/' + trimmedValue;
    } else {
      displayErrorMessage('Error', 'Please enter valid value');
    }
  };
  return (
    <div>
      <HomeHero onSearch={onSearch} />
    </div>
  );
};
