// api.test.ts
import { describe, it, expect, vi } from 'vitest';
import { Api } from './api';
import { HttpClient } from '../interfaces/http-client';

const url = 'https://example.com';
const response = { data: 'teste' };

describe('Api', () => {
  const mockHttpClient: HttpClient = {
    get: vi.fn().mockResolvedValue(response),
    post: vi.fn().mockResolvedValue(response),
    delete: vi.fn().mockResolvedValue({ status: '204' }),
  };

  const api = new Api(mockHttpClient);

  it('deve chamar o método get do HttpClient com a URL correta', async () => {
    const resultado = await api.get(url);
    expect(mockHttpClient.get).toHaveBeenCalledWith(url);
    expect(resultado).toEqual(response);
  });

  it('deve chamar o método post do HttpClient com a URL e o corpo corretos', async () => {
    const corpo = { chave: 'valor' };
    const resultado = await api.post(url, corpo);
    expect(mockHttpClient.post).toHaveBeenCalledWith(url, corpo);
    expect(resultado).toEqual(response);
  });

  it('deve chamar o método delete do HttpClient com a URL correta', async () => {
    const resultado = await api.delete(url);
    expect(mockHttpClient.delete).toHaveBeenCalledWith(url);
    expect(resultado).toEqual({ status: '204' });
  });
});
