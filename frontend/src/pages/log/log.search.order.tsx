import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { LogOrders, logQueryState } from '@/states';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { updateLogQuery } from './log.query.helper';

export const LogSearchOrder: FC = () => {
  const navigate = useNavigate();
  const [logQuery, setLogQuery] = useRecoilState(logQueryState);

  const onOrderChange = (e: SelectChangeEvent) => {
    updateLogQuery(
      {
        ...logQuery,
        order: e.target.value as LogOrders,
      },
      setLogQuery,
      navigate,
    );
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="log-search-order">정렬</InputLabel>
      <Select
        id="log-search-order"
        label="정렬"
        value={logQuery.order}
        onChange={onOrderChange}
      >
        <MenuItem value="desc">최신순</MenuItem>
        <MenuItem value="asc">지난순</MenuItem>
      </Select>
    </FormControl>
  );
};
