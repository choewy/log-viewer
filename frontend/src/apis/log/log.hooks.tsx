import { useEffect, useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  apiState,
  LogOrders,
  LogQueryState,
  logQueryState,
  LogTarget,
  LogTypes,
} from '@/states';
import { useNavigate } from 'react-router-dom';
import { logsState } from '@/states/logs.state';

interface UseSetLogQueryProps {
  page: string;
}

export const useSetLogQuery = ({ page }: UseSetLogQueryProps) => {
  const effectRef = useRef<boolean>(false);

  const searchParams = new URL(window.location.href).searchParams;
  const setLogQuery = useSetRecoilState(logQueryState);

  useEffect(() => {
    effectRef.current = false;
  }, [page]);

  useEffect(() => {
    if (!effectRef.current) {
      const take = searchParams.get('take');
      const order = searchParams.get('order') as LogOrders;
      const type = searchParams.get('type') as LogTypes;
      const target = searchParams.get('target') as LogTarget;
      setLogQuery({
        page: page ? parseInt(page) : 1,
        take: take ? parseInt(take) : 10,
        order: order ? order : 'desc',
        type: type ? type : '',
        target: target ? target : 'stickybomb-admin',
      });
      return () => {
        effectRef.current = true;
      };
    }
  }, [page, searchParams]);
};

interface UseCallLogsProps {
  logQuery: LogQueryState;
}

export const useCallLogs = ({ logQuery }: UseCallLogsProps) => {
  const effectRef = useRef<boolean>(false);

  const navigate = useNavigate();
  const { logApi } = useRecoilValue(apiState);
  const setLogs = useSetRecoilState(logsState);

  useEffect(() => {
    effectRef.current = false;
  }, [logQuery]);

  useEffect(() => {
    if (!effectRef.current) {
      logApi.logs(logQuery, setLogs, navigate);
      return () => {
        effectRef.current = true;
      };
    }
  }, [logQuery]);
};
