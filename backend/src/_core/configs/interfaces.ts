import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export interface ServerConfig {
  host: string;
  port: number;
  limit: string;
  tempDir: string;
}

export interface CorsConfig {
  origins: Array<string>;
  methods: Array<string>;
  allowedHeaders: Array<string>;
  exposedHeaders: Array<string>;
  preflightContinue: boolean;
  credentials: boolean;
}

export interface TypeOrmNamingStrategy {
  snakeCase: SnakeNamingStrategy;
}

export interface TypeOrmConfig {
  type: any;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  synchronize: boolean;
  logging: boolean;
  entities: Array<string>;
  migrations: Array<string>;
  timezone: string;
  insecureAuth: boolean;
  namingStrategyType: keyof TypeOrmNamingStrategy;
  autoLoadEntities: boolean;
  ssl: {
    require: boolean;
    rejectUnauthorized: boolean;
    caPath: string;
  };
}

export interface AuthConfig {
  accessToken: {
    secret: string;
    audience: string;
    subject: string;
    issuer: string;
    expiresIn: string;
  };
  refreshToken: {
    secret: string;
    audience: string;
    subject: string;
    issuer: string;
    expiresIn: string;
  };
}

export interface SwaggerConfig {
  version: string;
  path: string;
  title: string;
  description: string;
  contact: {
    name: string;
    url: string;
    email: string;
  };
  basicAuth: Record<string, string>;
}
