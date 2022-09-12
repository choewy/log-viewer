import { AuthResponseData } from '@/apis/auth';
import { atom, selector, SetterOrUpdater, DefaultValue } from 'recoil';

export interface AuthState {
  isLogin: boolean | null;
  user: AuthResponseData | null;
  error: boolean;
}

export type SetAuthState = SetterOrUpdater<AuthState>;

export const authState = atom<AuthState>({
  key: 'auth',
  default: {
    isLogin: null,
    user: null,
    error: false,
  },
});

export const authSelector = (key: keyof AuthState) =>
  selector({
    key: 'authSelector',
    get: ({ get }) => get(authState)[key],
    set: ({ get, set }, newValue) => {
      set(authState, {
        ...get(authState),
        [key]: newValue,
      });
    },
  });
