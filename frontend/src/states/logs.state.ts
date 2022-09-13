import { atom } from 'recoil';
import { LogTypes } from './log-query.state';

export interface LogData {
  id: number;
  type: LogTypes;
  statusCode: number;
  path: string;
  method: string;
  ip: string;
  data: {
    statusCode: number;
    error: {
      name: string;
      data: any;
    };
  };
  stack: null | string;
  className: string;
  createdAt: string;
}

export interface LogsState {
  totalCount: number;
  logs: LogData[];
}

export const logsState = atom<LogsState>({
  key: 'logs',
  default: {
    totalCount: 0,
    logs: [],
  },
});
