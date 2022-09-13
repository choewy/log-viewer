import { ConfigKey } from './types';

export const parseEnv = <T>(key: ConfigKey): T => {
  return JSON.parse(process.env[key]);
};
