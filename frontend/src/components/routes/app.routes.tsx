import { FC, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { HOME_PAGE_PATH, LOGIN_PAGE_PATH, LOG_PAGE_PATH } from '@/constants';
import { LogPage } from '@/pages/log';
import { LoginPage } from '@/pages/login';
import { BackPage } from '@/pages/back';
import { useRecoilValue, useRecoilState } from 'recoil';
import { apiState, authState } from '@/states';
import { LogNavigator } from '@/pages/log/log.navigator';

export const AppRoutes: FC = () => {
  const navigate = useNavigate();
  const { authApi } = useRecoilValue(apiState);
  const [{ isLogin }, setAuthState] = useRecoilState(authState);

  useEffect(() => {
    authApi.auth(setAuthState, navigate);
  }, []);

  return (
    <Routes>
      <Route
        path={HOME_PAGE_PATH}
        element={
          isLogin ? (
            <Navigate to={LOG_PAGE_PATH} />
          ) : (
            <Navigate to={LOGIN_PAGE_PATH} />
          )
        }
      />
      <Route
        path={LOGIN_PAGE_PATH}
        element={isLogin ? <Navigate to={LOG_PAGE_PATH} /> : <LoginPage />}
      />
      <Route path={LOG_PAGE_PATH}>
        <Route path="" element={<LogNavigator />} />
        <Route path=":page" element={<LogPage />} />
      </Route>
      <Route path="*" element={<BackPage />} />
    </Routes>
  );
};
