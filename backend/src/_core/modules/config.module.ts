import { configs } from '@core/configs';
import { ConfigModule } from '@nestjs/config';

export const CoreConfigModule = ConfigModule.forRoot({
  isGlobal: true,
  load: configs,
  envFilePath: [
    `${process.cwd()}/envs/.common.env`,
    `${process.cwd()}/envs/.${process.env.NODE_ENV}.env`,
  ],
});
