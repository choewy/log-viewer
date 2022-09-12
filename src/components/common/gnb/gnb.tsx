import { FC, MouseEvent, useState } from 'react';
import { AppBar, Container, IconButton, Toolbar } from '@mui/material';
import { GnbDesktop } from './gnb.desktop';
import { GnbProps } from './interfaces';
import { GnbUserMenu } from './gnb.user';
import { Menu as MenuIcon } from '@mui/icons-material';

export const GNB: FC = () => {
  const [navElement, setNavElement] = useState<HTMLElement | null>(null);
  const [userElement, setUserElement] = useState<HTMLElement | null>(null);

  const gnbProps: GnbProps = {
    navElement,
    userElement,
    onOpenMenu: ({ currentTarget }: MouseEvent<HTMLElement>) => {
      setNavElement(currentTarget);
    },
    onOpenUserMenu: ({ currentTarget }: MouseEvent<HTMLElement>) => {
      setUserElement(currentTarget);
    },
    onCloseMenu: () => setNavElement(null),
    onCloseUserMenu: () => setUserElement(null),
  };

  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{ maxWidth: { xl: 'none' }, padding: { xl: 0 } }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <GnbDesktop {...gnbProps} />
          <GnbUserMenu {...gnbProps} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
