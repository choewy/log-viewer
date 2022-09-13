import { atom } from 'recoil';

export type LogTypes = '' | 'warn' | 'error';
export type LogOrders = 'asc' | 'desc';

export interface LogQueryState {
  page: number;
  take: number;
  type: LogTypes;
  order: LogOrders;
}

export const logQueryState = atom<LogQueryState>({
  key: 'logQuery',
  default: {
    page: 1,
    take: 10,
    type: '',
    order: 'desc',
  },
});
