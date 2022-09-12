import { Box } from '@mui/material';
import { FC } from 'react';
import { LogSearchOrder } from './log.search.order';
import { LogSearchTake } from './log.search.take';
import { LogSearchType } from './log.search.type';

export const LogSearchForm: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        boxSizing: 'border-box',
      }}
    >
      <LogSearchTake />
      <LogSearchType />
      <LogSearchOrder />
    </Box>
  );
};
