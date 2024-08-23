import axios, { AxiosInstance } from 'axios';

export class HttpService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  protected get(url: string, params: any) {
    const appendedParams = {
      ...params,
      // api_token: process.env.VITE_STOCKS_API_KEY,
      api_token: '12345',
    }
    return this.axiosInstance.get(url, { params: appendedParams });
  }
}