import { HttpClient } from '../interfaces/http-client';

export class Api {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  async get<T>(url: string): Promise<T> {
    return this.client.get(url);
  }

  async post(url: string, body: unknown) {
    return this.client.post(url, body);
  }

  async delete(url: string) {
    return this.client.delete(url);
  }
}
