import { atom, SetterOrUpdater } from 'recoil';

export interface LoginErrorState {
  account: string;
  password: string;
  response: string;
}

export interface SetLoginErrorState extends SetterOrUpdater<LoginErrorState> {}

export const loginErrorState = atom<LoginErrorState>({
  key: 'loginError',
  default: {
    account: '',
    password: '',
    response: '',
  },
});
