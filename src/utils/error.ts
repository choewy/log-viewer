import { LOGIN_PAGE_PATH } from '@/constants';
import { AxiosError, AxiosResponse } from 'axios';
import { NavigateFunction } from 'react-router-dom';

export abstract class ErrorHandler {
  public getErrorResponse(e: unknown): AxiosResponse {
    const error = e as AxiosError;
    return error.response as AxiosResponse;
  }

  public redirectLoginPage(navigate: NavigateFunction) {
    navigate(LOGIN_PAGE_PATH, { replace: true });
  }
}
