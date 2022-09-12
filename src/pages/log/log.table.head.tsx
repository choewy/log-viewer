import { TableCell, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';

export const LogTableHead: FC = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell />
        <TableCell>ID</TableCell>
        <TableCell>Type</TableCell>
        <TableCell>Http Method</TableCell>
        <TableCell>Client IP</TableCell>
        <TableCell>URL</TableCell>
        <TableCell>Status Code</TableCell>
        <TableCell>Error</TableCell>
        <TableCell>ClassName</TableCell>
        <TableCell>Datetime</TableCell>
        <TableCell />
      </TableRow>
    </TableHead>
  );
};
