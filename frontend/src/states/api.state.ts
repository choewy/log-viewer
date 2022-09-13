import { AuthApi } from '@/apis/auth';
import { LogApi } from '@/apis/log';
import { atom } from 'recoil';

export interface ApiState {
  authApi: AuthApi;
  logApi: LogApi;
}

export const apiState = atom<ApiState>({
  key: 'api',
  default: {
    authApi: new AuthApi(),
    logApi: new LogApi(),
  },
});
