import React from 'react';
import { server } from '../../lib/api/index';
import { Listing } from './types';

interface ListingsProps {
  title: string;
}

export const Listings: React.FC<ListingsProps> = ({ title }) => {
  const fetchListings = async () => {
    console.log(await server.fetch<Listing[]>());
  };

  const deleteListing = async () => {
    const id = prompt('id:');
    if (id) {
      await server.delete(id);
    }
    console.log(await server.fetch<Listing[]>());
  };

  return (
    <>
      <h1>{title}</h1>
      <button onClick={fetchListings}>fetch</button>
      <button onClick={deleteListing}>delete</button>
    </>
  );
};
