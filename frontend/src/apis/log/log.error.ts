import { ErrorHandler } from '@/utils';
import { NavigateFunction } from 'react-router-dom';

export class LogApiErrorHandler extends ErrorHandler {
  public logs(e: unknown, navigate: NavigateFunction) {
    const response = this.getErrorResponse(e);
    switch (response.status) {
      case 401:
        return this.redirectLoginPage(navigate);
    }
  }
}
