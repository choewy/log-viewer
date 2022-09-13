import axios, { AxiosInstance } from 'axios';
import { Cookies } from 'react-cookie';
import { AxiosConfig, CookieConfig } from '@/configs';
import { LoginResponseData } from '@/apis/auth';

export abstract class Api {
  private config = {
    cookie: new CookieConfig(),
    axios: new AxiosConfig(),
  };

  private get cookie() {
    return new Cookies();
  }

  private get accessToken(): string {
    const { keys } = this.config.cookie;
    return this.cookie.get(keys.accessToken);
  }

  private get refreshToken(): string {
    const { keys } = this.config.cookie;
    return this.cookie.get(keys.refreshToken);
  }

  protected methods = {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    patch: 'PATCH',
    delete: 'DELETE',
  };

  protected get axios(): AxiosInstance {
    const { baseURL } = this.config.axios;

    return axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
  }

  protected saveAuthorization({
    accessToken,
    refreshToken,
  }: LoginResponseData): void {
    const { keys } = this.config.cookie;
    this.cookie.set(keys.accessToken, accessToken, { path: '/' });
    this.cookie.set(keys.refreshToken, refreshToken, { path: '/' });
  }

  protected removeAuthorization(): void {
    const { keys } = this.config.cookie;
    this.cookie.remove(keys.accessToken, { path: '/' });
    this.cookie.remove(keys.refreshToken, { path: '/' });
  }
}
