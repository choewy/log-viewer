import { FC } from 'react';
import { Table, TableBody, TableContainer } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { LogTableRow } from './log.table.row';
import { LogTableHead } from './log.table.head';
import { useNavigate } from 'react-router-dom';
import { logsState } from '@/states/logs.state';

export const LogTable: FC = () => {
  const navigate = useNavigate();
  const { rows } = useRecoilValue(logsState);

  return (
    <TableContainer
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        boxSizing: 'border-box',
      }}
    >
      <Table>
        <LogTableHead />
        <TableBody>
          {rows.map((row) => {
            return (
              <LogTableRow
                key={JSON.stringify(row)}
                row={row}
                navigate={navigate}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
