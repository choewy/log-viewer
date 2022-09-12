import { MouseEvent } from 'react';

export interface GnbProps {
  navElement: HTMLElement | null;
  userElement: HTMLElement | null;
  onOpenMenu(e: MouseEvent<HTMLElement>): void;
  onOpenUserMenu(e: MouseEvent<HTMLElement>): void;
  onCloseMenu(e: MouseEvent<HTMLElement>): void;
  onCloseUserMenu(e: MouseEvent<HTMLElement>): void;
}
