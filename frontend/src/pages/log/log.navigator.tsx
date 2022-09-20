import { logQueryState } from '@/states';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { updateLogQuery } from './log.query.helper';

export const LogNavigator = () => {
  const navigate = useNavigate();
  const { page } = useParams<{ page: string }>();

  const setLogQuery = useSetRecoilState(logQueryState);

  useEffect(() => {
    if (!page) {
      updateLogQuery(
        {
          page: 1,
          take: 10,
          type: '',
          order: 'desc',
          target: 'stickybomb-admin',
        },
        setLogQuery,
        navigate,
      );
      return () => {};
    }
  }, []);
  return <></>;
};
