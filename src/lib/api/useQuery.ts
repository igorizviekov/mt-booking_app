import { useState, useEffect, useCallback } from 'react';
import { server } from '../api/server';

interface State<TData> {
  data: TData | null;
  loading: boolean;
  error: boolean;
}

export const useQuery = <TData>(): [State<TData>, () => any] => {
  const [state, setState] = useState<State<TData>>({
    data: null,
    loading: true,
    error: false,
  });

  const fetchApi = async () => {
    try {
      const res = await server.fetch<TData>();
      setState({
        data: res,
        loading: false,
        error: false,
      });
    } catch {
      setState({
        data: null,
        loading: false,
        error: true,
      });
    }
  };

  const fetchMemo = useCallback(fetchApi, []);

  useEffect(() => {
    fetchMemo();
  }, [fetchMemo]);

  return [state, fetchMemo];
};
