import { AuthApi } from '@/apis/auth';
import { LogApi } from '@/apis/log';
import { apiState, authState } from '@/states';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

export const useInitializer = () => {
  const effectRef = useRef<boolean>(false);

  const navigate = useNavigate();
  const setApiState = useSetRecoilState(apiState);
  const setAuthState = useSetRecoilState(authState);

  const initialize = async () => {
    const authApi = new AuthApi();
    const logApi = new LogApi();

    await authApi.auth(setAuthState, navigate);

    setApiState({
      authApi: authApi,
      logApi: logApi,
    });
  };

  useEffect(() => {
    if (!effectRef.current) {
      initialize();
      return () => {
        effectRef.current = true;
      };
    }
  }, []);
};
