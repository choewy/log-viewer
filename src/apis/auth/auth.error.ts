import { LoginErrorState } from '@/states/login.error.state';
import { ErrorHandler } from '@/utils';
import { NavigateFunction } from 'react-router-dom';
import { SetterOrUpdater } from 'recoil';

export class AuthApiErrorHandler extends ErrorHandler {
  public auth(e: unknown, navigate: NavigateFunction) {
    const response = this.getErrorResponse(e);
    switch (response.status) {
      case 401:
        return this.redirectLoginPage(navigate);
    }
  }

  public login(e: unknown, setLoginError: SetterOrUpdater<LoginErrorState>) {
    const response = this.getErrorResponse(e);
    switch (response.status) {
      case 401:
        return setLoginError({
          account: '',
          password: '',
          response: '아이디 또는 비밀번호를 확인하세요.',
        });
    }
  }
}
