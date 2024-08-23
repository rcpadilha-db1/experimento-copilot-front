import { useState, useEffect } from 'react';
import { Api } from '../core/api';
import { FetchHttpClient } from '../external/fetchHttpClient';

const api = new Api(new FetchHttpClient());

export const useApi = <T>(
  url: string,
  method: 'get' | 'post' | 'delete',
  body?: unknown
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    setError(false);
    try {
      let response: { data: T } | null = null;
      if (method === 'get') {
        response = await api.get(url);
      } else if (method === 'post') {
        response = await api.post(url, body);
      } else if (method === 'delete') {
        response = await api.delete(url);
      }
      setData(response?.data ?? null);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
};
