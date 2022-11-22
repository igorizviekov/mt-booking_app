import data from '../../mock-data/houses.json';
let mockData = data;

export const server = {
  fetch: <IData = any>() => {
    const p = new Promise((res, rej) => {
      setTimeout(() => res(mockData), 1500);
    });

    return p as Promise<IData>;
  },

  delete: async (id: string) => {
    mockData = mockData.filter((e) => e.id !== id);
  },
};
