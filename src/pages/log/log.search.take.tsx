import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { logQueryState } from '@/states';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { updateLogQuery } from './log.query.helper';

export const LogSearchTake: FC = () => {
  const navigate = useNavigate();
  const [logQuery, setLogQuery] = useRecoilState(logQueryState);

  const onTakeChange = (e: SelectChangeEvent) => {
    updateLogQuery(
      {
        ...logQuery,
        take: parseInt(e.target.value),
      },
      setLogQuery,
      navigate,
    );
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="log-search-order">목록수</InputLabel>
      <Select
        id="log-search-take"
        label="목록수"
        value={`${logQuery.take}`}
        onChange={onTakeChange}
      >
        {['10', '20', '30', '40', '50'].map((value) => (
          <MenuItem key={`log-search-take-${value}`} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
