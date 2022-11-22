import React from 'react';
import { server, useQuery } from '../../lib/api/index';
import { Listing } from './types';

interface ListingsProps {
  title: string;
}

export const Listings: React.FC<ListingsProps> = ({ title }) => {
  const [{ loading, data, error }, refetch] = useQuery<Listing[]>();

  const deleteListing = async (id: string) => {
    await server.delete(id);
    refetch();
  };

  const listings = data
    ? data.map((elem) => {
        return (
          <div key={elem.id}>
            <h2>{elem.title}</h2>
            <button onClick={() => deleteListing(elem.id)}>delete</button>
          </div>
        );
      })
    : null;

  if (error) {
    return <h1>{'Error'}</h1>;
  }

  if (loading) {
    return <h1>loading...</h1>;
  }
  return <>{listings}</>;
};
