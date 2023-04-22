import axios, { AxiosInstance, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';

export class ApiService {
  private _axiosInstance: AxiosInstance;

  constructor(url: string, options?: CreateAxiosDefaults) {
    this._axiosInstance = axios.create({
      baseURL: url,
      ...options
    });
  }

  protected get = async <T>(path: string, data?: {}, config?: AxiosRequestConfig) => {
    const args = {
      ...config,
      params: {
        ...(config?.params ?? {}),
        ...data
      }
    };

    return this._axiosInstance.get<T>(path, args);
  };

  protected delete = async <T>(path: string, data?: {}, config?: AxiosRequestConfig) => {
    const args = {
      ...config,
      params: {
        ...(config?.params ?? {}),
        ...data
      }
    };

    return this._axiosInstance.delete<T>(path, args);
  };

  protected post = async <T>(path: string, data?: {}, config?: AxiosRequestConfig) => {
    return this._axiosInstance.post<T>(path, data, config);
  };

  protected put = async <T>(path: string, data?: {}, config?: AxiosRequestConfig) => {
    return this._axiosInstance.put<T>(path, data, config);
  };
}
