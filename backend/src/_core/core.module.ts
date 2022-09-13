import { Module } from '@nestjs/common';
import { CoreConfigModule, CoreTypeOrmModule } from './modules';

@Module({
  imports: [CoreConfigModule, CoreTypeOrmModule],
})
export class CoreModule {}
