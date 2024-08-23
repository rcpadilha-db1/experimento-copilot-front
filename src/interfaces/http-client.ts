/* eslint-disable @typescript-eslint/no-explicit-any */
export interface HttpClient {
  get(url: string): Promise<any>;
  post(url: string, body: unknown): Promise<any>;
  delete(url: string): Promise<any>;
}
