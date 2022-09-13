import { registerAs } from '@nestjs/config';
import { parseEnv } from './helpers';
import { ServerConfig } from './interfaces';
import { ConfigKey, EnvKey } from './types';

export default registerAs(ConfigKey.Server, (): ServerConfig => {
  const { tempDir, ...ENV_SERVER } = parseEnv<ServerConfig>(EnvKey.Server);
  return {
    ...ENV_SERVER,
    tempDir: process.cwd() + tempDir,
  };
});
