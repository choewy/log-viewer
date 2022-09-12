import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { logQueryState } from '@/states';
import { logsState } from '@/states/logs.state';
import { LogTable } from './log.table';
import { useCallLogs, useSetLogQuery } from '@/apis/log';
import { LogPagenation } from './log.pagenation';
import { LogSearchForm } from './log.search.form';

export const LogPage: FC = () => {
  const { page } = useParams<{ page: string }>();
  const logQuery = useRecoilValue(logQueryState);
  const { totalCount } = useRecoilValue(logsState);

  useSetLogQuery({ page: page as string });
  useCallLogs({ logQuery });

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
      <h1>LOG PAGE</h1>
      <div>
        <h3>TOTAL : {totalCount}</h3>
      </div>
      <LogSearchForm />
      <LogTable />
      <LogPagenation />
    </div>
  );
};
