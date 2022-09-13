import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { readFileSync } from 'fs';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { parseEnv } from './helpers';
import { TypeOrmConfig, TypeOrmNamingStrategy } from './interfaces';
import { ConfigKey, EnvKey } from './types';

export default registerAs(ConfigKey.Typeorm, (): TypeOrmModuleOptions => {
  const namingStrategies = {
    snakeCase: new SnakeNamingStrategy(),
  } as Record<keyof TypeOrmNamingStrategy, any>;

  const {
    entities,
    migrations,
    namingStrategyType,
    ssl: { caPath, ...ssl },
    ...ENV_TYPEORM
  } = parseEnv<TypeOrmConfig>(EnvKey.Typeorm);

  return {
    ...ENV_TYPEORM,
    entities: entities.map((path) => process.cwd() + path),
    migrations: migrations.map((path) => process.cwd() + path),
    namingStrategy: namingStrategies[namingStrategyType],
    ssl: ssl.require
      ? { ...ssl, ca: readFileSync(process.cwd() + caPath).toString() }
      : undefined,
  };
});
