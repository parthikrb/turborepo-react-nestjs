import axios from 'axios';

interface ApiConfig {
  baseURL?: string;
  getAuthToken?: () => string | Promise<string>;
}

let apiConfig: ApiConfig = {
  baseURL: process.env.VITE_PUBLIC_API_URL || 'http://localhost:4001',
};

export const AXIOS_INSTANCE = axios.create({
  baseURL: apiConfig.baseURL,
});

AXIOS_INSTANCE.interceptors.request.use(async (config) => {
  if (apiConfig.getAuthToken) {
    const token = await apiConfig.getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export const customInstance = async <T>({
  url,
  method,
  params,
  data,
  headers,
  signal,
}: {
  url: string;
  method: string;
  params?: any;
  data?: any;
  headers?: any;
  signal?: AbortSignal;
}): Promise<T> => {
  const response = await AXIOS_INSTANCE.request<T>({
    url,
    method,
    params,
    data,
    headers,
    signal,
  });
  return response.data;
};

/**
 * Configure the API client with custom settings
 * @example
 * ```typescript
 * configureApi({
 *   baseURL: 'https://api.example.com',
 *   getAuthToken: () => localStorage.getItem('token')
 * });
 * ```
 */
export const configureApi = (config: ApiConfig): void => {
  apiConfig = { ...apiConfig, ...config };

  if (config.baseURL) {
    AXIOS_INSTANCE.defaults.baseURL = config.baseURL;
  }
};

/**
 * Get the current API configuration
 */
export const getApiConfig = (): Readonly<ApiConfig> => ({ ...apiConfig });
