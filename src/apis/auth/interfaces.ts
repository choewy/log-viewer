import { AuthorizedType } from './enums';

export interface AuthResponseData {
  id: string;
  account: string;
  name: string;
  roleName: string[];
  authorized: AuthorizedType[];
}

export interface LoginResponseData {
  accessToken: string;
  refreshToken: string;
}
