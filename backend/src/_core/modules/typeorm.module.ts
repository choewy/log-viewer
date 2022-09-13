import { ConfigKey } from '@core/configs';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

export const CoreTypeOrmModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    return configService.get<TypeOrmModuleOptions>(ConfigKey.Typeorm);
  },
});
