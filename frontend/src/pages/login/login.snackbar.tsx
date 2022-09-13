import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { Snackbar, Alert } from '@mui/material';
import { loginErrorState } from '@/states/login.error.state';

export const LoginSnackbar: FC = () => {
  const [loginError, setLoginError] = useRecoilState(loginErrorState);
  const onCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setLoginError({
      account: '',
      password: '',
      response: '',
    });
  };

  return (
    <Snackbar
      open={loginError.response !== ''}
      autoHideDuration={6000}
      onClose={onCloseSnackbar}
    >
      <Alert onClose={onCloseSnackbar} severity="error" sx={{ width: '100%' }}>
        {loginError.response}
      </Alert>
    </Snackbar>
  );
};
