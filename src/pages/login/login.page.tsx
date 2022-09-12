import { FC } from 'react';
import { LoginForm } from './login.form';
import { LoginSnackbar } from './login.snackbar';

export const LoginPage: FC = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>LOGIN</h1>
      <LoginForm />
      <LoginSnackbar />
    </div>
  );
};
