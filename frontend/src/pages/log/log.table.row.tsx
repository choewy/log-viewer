import { FC, Fragment, MouseEvent, useCallback, useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import { dateToString, objectToString } from '@/helpers';
import { useRecoilValue } from 'recoil';
import { apiState } from '@/states';
import { NavigateFunction } from 'react-router-dom';
import { LogData } from '@/states/logs.state';

interface Props {
  navigate: NavigateFunction;
  log: LogData;
}

export const LogTableRow: FC<Props> = ({
  navigate,
  log: {
    id,
    createdAt,
    type,
    statusCode,
    data,
    path,
    method,
    ip,
    stack,
    className,
  },
}) => {
  const { logApi } = useRecoilValue(apiState);

  const [open, setOpen] = useState<boolean>(false);

  const onDeleteClick = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      logApi.delete(e.currentTarget.id, navigate);
    },
    [logApi, navigate],
  );

  return (
    <Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>{id}</TableCell>
        <TableCell>
          <Chip
            label={type}
            color={type === 'warn' ? 'warning' : 'error'}
            style={{ fontWeight: 600 }}
            variant="outlined"
          />
        </TableCell>
        <TableCell>{method}</TableCell>
        <TableCell>{ip}</TableCell>
        <TableCell>{path}</TableCell>
        <TableCell>{statusCode}</TableCell>
        <TableCell>{data.error.name}</TableCell>
        <TableCell>{className}</TableCell>
        <TableCell>{dateToString(createdAt)}</TableCell>
        <TableCell>
          <Button id={`${id}`} onClick={onDeleteClick}>
            삭제
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={11}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {type === 'warn' ? (
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Exception Response Data
                </Typography>
                <pre>
                  <code>{objectToString(data.error)}</code>
                </pre>
              </Box>
            ) : (
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Error Stack
                </Typography>
                <pre>
                  <code>{stack}</code>
                </pre>
              </Box>
            )}
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};
