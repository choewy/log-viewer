import { FC, Fragment } from 'react';
import { GnbProps } from './interfaces';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { GNB_PAGES } from './constants';
import { Link } from 'react-router-dom';

export const GnbDesktop: FC<GnbProps> = ({ onCloseMenu }) => {
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        {GNB_PAGES.map((page) => (
          <Link
            key={JSON.stringify(page)}
            to={page.to}
            style={{
              textDecoration: 'none',
            }}
          >
            <Button
              onClick={onCloseMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page.label}
            </Button>
          </Link>
        ))}
      </Box>
    </Fragment>
  );
};
