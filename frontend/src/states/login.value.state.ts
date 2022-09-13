import { atom, SetterOrUpdater } from 'recoil';

export interface LoginValueState {
  account: string;
  password: string;
}

export interface SetLoginValueState extends SetterOrUpdater<LoginValueState> {}

export const loginValueState = atom<LoginValueState>({
  key: 'login',
  default: {
    account: '',
    password: '',
  },
});
