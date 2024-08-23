import { useState } from 'react';
import { Api } from '../core/api';
import { FetchHttpClient } from '../external/FetchHttpClient';

const api = new Api(new FetchHttpClient());

export const useApi = <T>(
  url: string,
  method: 'get' | 'post' | 'delete',
  body?: unknown
) => {
  const urlBase = `${import.meta.env.VITE_API_URL}/${url}&api_token=${import.meta.env.VITE_API_TOKEN}`;
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchData = async (): Promise<void> => {
    setLoading(true);
    setError(false);
    try {
      let response: { data: T } | null = null;
      if (method === 'get') {
        response = await api.get(urlBase);
      } else if (method === 'post') {
        response = await api.post(urlBase, body);
      } else if (method === 'delete') {
        response = await api.delete(urlBase);
      }
      setData(response?.data ?? null);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };



  return { data, loading, error, fetch: fetchData };
};
