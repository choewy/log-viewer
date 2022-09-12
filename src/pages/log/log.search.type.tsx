import { ChangeEvent, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { logQueryState, LogTypes } from '@/states';
import { updateLogQuery } from './log.query.helper';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

export const LogSearchType: FC = () => {
  const navigate = useNavigate();
  const [logQuery, setLogQuery] = useRecoilState(logQueryState);

  const onTypeRadioClick = (e: ChangeEvent<HTMLInputElement>) => {
    updateLogQuery(
      {
        ...logQuery,
        type: e.target.value as LogTypes,
      },
      setLogQuery,
      navigate,
    );
  };

  return (
    <FormControl>
      <RadioGroup row>
        <FormControlLabel
          label="전체"
          control={
            <Radio
              value={''}
              checked={logQuery.type === ''}
              onChange={onTypeRadioClick}
            />
          }
        />
        <FormControlLabel
          label="경고"
          control={
            <Radio
              value="warn"
              checked={logQuery.type === 'warn'}
              onChange={onTypeRadioClick}
            />
          }
        />
        <FormControlLabel
          label="오류"
          control={
            <Radio
              value="error"
              checked={logQuery.type === 'error'}
              onChange={onTypeRadioClick}
            />
          }
        />
      </RadioGroup>
    </FormControl>
  );
};
