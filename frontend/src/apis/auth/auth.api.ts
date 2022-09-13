import { Api } from '@/utils';
import { AuthResponseData, LoginResponseData } from '@/apis/auth';
import { AuthState, SetAuthState } from '@/states';
import { SetterOrUpdater } from 'recoil';
import { NavigateFunction } from 'react-router-dom';
import { LOGIN_PAGE_PATH, LOG_PAGE_PATH } from '@/constants';
import { AuthApiErrorHandler } from './auth.error';
import { LoginValueState } from '@/states/login.value.state';
import { SetLoginErrorState } from '@/states/login.error.state';

export class AuthApi extends Api {
  private readonly errorHandlers = new AuthApiErrorHandler();

  async auth(setAuth: SetAuthState, navigate: NavigateFunction): Promise<void> {
    try {
      const res = await this.axios({
        method: this.methods.get,
        url: '/auth',
      });
      setAuth({
        user: res.data as AuthResponseData,
        isLogin: true,
        error: false,
      });
    } catch (e) {
      setAuth({
        user: null,
        isLogin: false,
        error: true,
      });
      this.errorHandlers.auth(e, navigate);
    }
  }

  async login(
    loginValue: LoginValueState,
    setLoginError: SetLoginErrorState,
    setAuthState: SetAuthState,
    navigate: NavigateFunction,
  ): Promise<void> {
    try {
      const res = await this.axios({
        method: this.methods.post,
        url: '/auth/signin',
        data: loginValue,
      });
      setAuthState({
        isLogin: true,
        user: null,
        error: false,
      });
      this.saveAuthorization(res.data as LoginResponseData);
      navigate(LOG_PAGE_PATH, { replace: true });
    } catch (e) {
      setAuthState({
        isLogin: false,
        user: null,
        error: true,
      });
      this.errorHandlers.login(e, setLoginError);
    }
  }

  logout(
    setAuth: SetterOrUpdater<AuthState>,
    navigate: NavigateFunction,
  ): void {
    setAuth({
      isLogin: false,
      user: null,
      error: false,
    });
    this.removeAuthorization();
    navigate(LOGIN_PAGE_PATH, { replace: true });
  }
}
