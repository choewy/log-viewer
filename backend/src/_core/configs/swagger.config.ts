import { registerAs } from '@nestjs/config';
import { parseEnv } from './helpers';
import { SwaggerConfig } from './interfaces';
import { ConfigKey, EnvKey } from './types';

export default registerAs(ConfigKey.Swagger, () => {
  return parseEnv<SwaggerConfig>(EnvKey.Swagger);
});
