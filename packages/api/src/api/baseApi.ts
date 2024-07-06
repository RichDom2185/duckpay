import axios, { AxiosPromise, AxiosRequestConfig, isAxiosError } from "axios";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8080";

const client = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

class BaseApi {
  /*******************
   * REQUEST METHODS *
   *******************/

  private _get<T>(
    path: string,
    params?: AxiosRequestConfig["params"]
  ): AxiosPromise<T> {
    return client.get(path, { ...this._getAxiosConfig(), params });
  }

  private _post<T>(path: string, data: unknown = {}): AxiosPromise<T> {
    return client.post(path, data, this._getAxiosConfig());
  }

  private _put<T>(path: string, data: unknown = {}): AxiosPromise<T> {
    return client.put(path, data, this._getAxiosConfig());
  }

  private _delete<T>(path: string): AxiosPromise<T> {
    return client.delete(path, this._getAxiosConfig());
  }

  /*****************
   * CONFIGURATION *
   *****************/

  private _basePath = "";

  protected extendBasePath(path: string): void {
    this._basePath += path;
  }

  private _getAxiosConfig(): AxiosRequestConfig {
    const host = client.defaults.baseURL;
    // Default config
    const config: AxiosRequestConfig = {
      baseURL: host?.concat(this._basePath) ?? this._basePath,
      headers: {
        Accept: "application/json",
      },
      withCredentials: true,
    };
    return config;
  }

  /*********************
   * INHERITED METHODS *
   *********************/

  protected get<T>(
    path: string,
    params?: AxiosRequestConfig["params"]
  ): Promise<T> {
    return this._handleApiResponse(this._get(path, params));
  }

  protected post<T>(path: string, data: unknown = {}): Promise<T> {
    return this._handleApiResponse(this._post(path, data));
  }

  protected put<T>(path: string, data: unknown = {}): Promise<T> {
    return this._handleApiResponse(this._put(path, data));
  }

  protected delete<T>(path: string): Promise<T> {
    return this._handleApiResponse(this._delete(path));
  }

  /****************************
   * MIDDLEWARE CONFIGURATION *
   ****************************/

  private async _handleApiResponse<T>(promise: AxiosPromise<T>): Promise<T> {
    try {
      const response = await promise;
      // TODO: Handle middlewares
      // e.g. redirect on insufficient permissions
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error("Error executing request:", error);
        throw error.response?.data;
      } else {
        console.error("Unhandled error:", error);
      }
      throw error;
    }
  }
}

export default BaseApi;
