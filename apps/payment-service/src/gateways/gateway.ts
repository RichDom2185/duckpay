import {
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
  isAxiosError
} from "axios";

export abstract class Gateway {
  constructor(private client: AxiosInstance) {}
  /*******************
   * REQUEST METHODS *
   *******************/

  private _get<T>(
    path: string,
    params?: AxiosRequestConfig["params"]
  ): AxiosPromise<T> {
    return this.client.get(path, { params });
  }

  private _post<T>(path: string, data: unknown = {}): AxiosPromise<T> {
    return this.client.post(path, data);
  }

  private _put<T>(path: string, data: unknown = {}): AxiosPromise<T> {
    return this.client.put(path, data);
  }

  private _delete<T>(path: string): AxiosPromise<T> {
    return this.client.delete(path);
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
