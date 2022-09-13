import { LogQueryState } from '@/states';
import { LogsState } from '@/states/logs.state';
import { Api } from '@/utils';
import { NavigateFunction } from 'react-router-dom';
import { SetterOrUpdater } from 'recoil';
import { LogApiErrorHandler } from './log.error';

export class LogApi extends Api {
  private readonly errorHandler = new LogApiErrorHandler();

  async logs(
    logQuery: LogQueryState,
    setLogs: SetterOrUpdater<LogsState>,
    navigate: NavigateFunction,
  ): Promise<void> {
    try {
      const response = await this.axios({
        method: this.methods.get,
        params: logQuery,
        url: '/logs',
      });

      setLogs(response.data as LogsState);
    } catch (e) {
      this.errorHandler.logs(e, navigate);
    }
  }

  async delete(logId: string, navigate: NavigateFunction): Promise<void> {
    try {
      await this.axios({
        method: this.methods.delete,
        url: `/logs/${logId}`,
      });
      navigate(0);
    } catch (e) {}
  }
}
