import { FC, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { logQueryState } from '@/states';
import { logsState } from '@/states/logs.state';
import { updateLogQuery } from './log.query.helper';
import { Box, Pagination, PaginationItem } from '@mui/material';
import {
  NavigateBeforeRounded,
  NavigateNextRounded,
} from '@mui/icons-material';

export const LogPagenation: FC = () => {
  const navigate = useNavigate();
  const [logQuery, setLogQuery] = useRecoilState(logQueryState);
  const { totalCount } = useRecoilValue(logsState);

  const onPageChange = (_: ChangeEvent<unknown>, page: number) => {
    updateLogQuery(
      {
        ...logQuery,
        page,
      },
      setLogQuery,
      navigate,
    );
  };

  return (
    <Box
      sx={{
        margin: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Pagination
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        count={Math.ceil(totalCount / logQuery.take)}
        page={logQuery.page}
        onChange={onPageChange}
        renderItem={(item) => (
          <PaginationItem
            components={{
              previous: NavigateBeforeRounded,
              next: NavigateNextRounded,
            }}
            {...item}
          />
        )}
      />
    </Box>
  );
};
