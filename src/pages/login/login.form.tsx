import { ChangeEvent, FC, FormEvent } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { loginErrorState } from '@/states/login.error.state';
import { loginValueState } from '@/states/login.value.state';
import { Button, FormControl, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { apiState, authState } from '@/states';

export const LoginForm: FC = () => {
  const navigate = useNavigate();
  const { authApi } = useRecoilValue(apiState);
  const setAuthState = useSetRecoilState(authState);
  const [loginValue, setLoginValue] = useRecoilState(loginValueState);
  const [loginError, setLoginError] = useRecoilState(loginErrorState);

  const onChangeLoginValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginValue({
      ...loginValue,
      [name]: value,
    });
    switch (name) {
      case 'account':
        return setLoginError({
          ...loginError,
          [name]: value ? '' : '아이디를 입력하세요.',
        });
      case 'password':
        setLoginError({
          ...loginError,
          [name]: value ? '' : '비밀번호를 입력하세요.',
        });
    }
  };

  const onLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { account, password } = loginValue;

    const newError = {
      account: account ? '' : '아이디를 입력하세요.',
      password: password ? '' : '비밀번호를 입력하세요.',
      response: '',
    };

    if (Object.values(newError).find((error) => error)) {
      return setLoginError(newError);
    }

    await authApi.login(loginValue, setLoginError, setAuthState, navigate);
  };

  return (
    <form onSubmit={onLoginSubmit}>
      <FormControl
        sx={{
          width: '100%',
          maxWidth: 300,
          minWidth: 300,
        }}
      >
        <TextField
          type="text"
          label="아이디"
          name="account"
          error={loginError.account !== ''}
          value={loginValue.account}
          helperText={loginError.account}
          onChange={onChangeLoginValue}
          size="small"
          sx={{ marginBottom: 1 }}
        />
        <TextField
          type="password"
          label="비밀번호"
          name="password"
          error={loginError.password !== ''}
          helperText={loginError.password}
          value={loginValue.password}
          onChange={onChangeLoginValue}
          size="small"
          sx={{ marginBottom: 1 }}
        />
        <Button
          type="submit"
          variant="contained"
          disableElevation
          sx={{ marginBottom: 1 }}
        >
          로그인
        </Button>
      </FormControl>
    </form>
  );
};
