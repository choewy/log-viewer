import { atom } from 'recoil';

export type LogTypes = '' | 'warn' | 'error';
export type LogOrders = 'asc' | 'desc';
export type LogTarget = 'stickybomb-admin' | 'stickybomb-service';

export interface LogQueryState {
  page: number;
  take: number;
  type: LogTypes;
  order: LogOrders;
  target: LogTarget;
}

export const logQueryState = atom<LogQueryState>({
  key: 'logQuery',
  default: {
    page: 1,
    take: 10,
    type: '',
    order: 'desc',
    target: 'stickybomb-admin',
  },
});
