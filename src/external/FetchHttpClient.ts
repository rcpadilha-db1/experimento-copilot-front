import { HttpClient } from '../interfaces/http-client';

export class FetchHttpClient implements HttpClient {
  async get(url: string) {
    const response = await fetch(url);
    return response.json();
  }

  async post(url: string, body: unknown) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }

  async delete(url: string) {
    const response = await fetch(url, {
      method: 'DELETE',
    });
    return response.json();
  }
}
