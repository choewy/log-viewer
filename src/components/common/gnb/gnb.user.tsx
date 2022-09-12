import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { FC, MouseEvent } from 'react';
import {
  GNB_SETTINGS,
  SettingEventFunctionArgs,
  SettingEventType,
} from './constants';
import { GnbProps } from './interfaces';
import { UsbRounded } from '@mui/icons-material';
import { useRecoilState, useRecoilValue } from 'recoil';
import { apiState, authState } from '@/states';
import { useNavigate } from 'react-router-dom';

interface MenuEvent {
  eventType: SettingEventType;
  eventLink: string;
  eventFunction: (args: SettingEventFunctionArgs) => any;
}

export const GnbUserMenu: FC<GnbProps> = ({
  userElement,
  onOpenUserMenu,
  onCloseUserMenu,
}) => {
  const navigate = useNavigate();
  const { authApi } = useRecoilValue(apiState);
  const [{ isLogin }, setAuthState] = useRecoilState(authState);

  const onMenuClick = (
    e: MouseEvent<HTMLElement>,
    { eventType, eventLink, eventFunction }: MenuEvent,
  ) => {
    switch (eventType) {
      case SettingEventType.Link:
        navigate(eventLink, { replace: true });
        break;
      case SettingEventType.Function:
        eventFunction({
          authApi,
          setAuthState,
          navigate,
        });
        break;
    }
    onCloseUserMenu(e);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={onOpenUserMenu} sx={{ p: 0 }}>
        <Avatar>
          <UsbRounded />
        </Avatar>
      </IconButton>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={userElement}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(userElement)}
        onClose={onCloseUserMenu}
      >
        {GNB_SETTINGS.filter(({ auth }) => auth === isLogin).map((setting) => (
          <MenuItem
            key={JSON.stringify(setting)}
            onClick={(e) =>
              onMenuClick(e, {
                eventType: setting.eventType,
                eventLink: setting.to as string,
                eventFunction: setting.function as () => any,
              })
            }
          >
            <Typography textAlign="center">{setting.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
