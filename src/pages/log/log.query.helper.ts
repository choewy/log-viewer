import { LOG_PAGE_PATH } from '@/constants';
import { LogQueryState } from '@/states';
import { NavigateFunction } from 'react-router-dom';
import { SetterOrUpdater } from 'recoil';

export const updateLogQuery = (
  newLogQuery: LogQueryState,
  setLogQuery: SetterOrUpdater<LogQueryState>,
  navigate: NavigateFunction,
) => {
  setLogQuery(newLogQuery);
  navigate(
    `${LOG_PAGE_PATH}/${newLogQuery.page}?` +
      Object.entries(newLogQuery)
        .filter(([key, value]) => key !== 'page' && value)
        .map(([key, value]) => `${key}=${value}`)
        .join('&'),
  );
};
