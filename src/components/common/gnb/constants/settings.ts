import { AuthApi } from '@/apis/auth';
import { LOGIN_PAGE_PATH, MY_PAGE_PATH } from '@/constants';
import { AuthState } from '@/states';
import { NavigateFunction } from 'react-router-dom';
import { SetterOrUpdater } from 'recoil';

export interface SettingEventFunctionArgs {
  authApi: AuthApi;
  setAuthState: SetterOrUpdater<AuthState>;
  navigate: NavigateFunction;
}

export enum SettingEventType {
  Link = 'link',
  Function = 'function',
}

export const GNB_SETTINGS = [
  {
    label: '로그인',
    eventType: SettingEventType.Link,
    to: LOGIN_PAGE_PATH,
    auth: false,
  },
  {
    label: '내정보',
    eventType: SettingEventType.Link,
    to: MY_PAGE_PATH,
    auth: true,
  },
  {
    label: '로그아웃',
    eventType: SettingEventType.Function,
    function: ({
      authApi,
      setAuthState,
      navigate,
    }: SettingEventFunctionArgs) => {
      authApi.logout(setAuthState, navigate);
    },
    auth: true,
  },
];
