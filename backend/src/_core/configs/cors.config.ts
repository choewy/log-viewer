import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { registerAs } from '@nestjs/config';
import { parseEnv } from './helpers';
import { CorsConfig } from './interfaces';
import { ConfigKey, EnvKey } from './types';

export default registerAs(ConfigKey.Cors, (): CorsOptions => {
  const ENV_CORS = parseEnv<CorsConfig>(EnvKey.Cors);
  return {
    ...ENV_CORS,
    origin: ENV_CORS.origins.map((regexp) => new RegExp(regexp)),
  };
});
