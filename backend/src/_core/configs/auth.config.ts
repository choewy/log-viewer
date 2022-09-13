import { registerAs } from '@nestjs/config';
import { parseEnv } from './helpers';
import { AuthConfig } from './interfaces';
import { ConfigKey, EnvKey } from './types';

export default registerAs(ConfigKey.Auth, () => {
  return parseEnv<AuthConfig>(EnvKey.Auth);
});
