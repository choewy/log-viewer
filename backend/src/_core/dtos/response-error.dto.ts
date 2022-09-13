import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ResponseErrorDto {
  @ApiResponseProperty()
  @Expose()
  name: string;

  @ApiResponseProperty()
  @Expose()
  data: any;

  constructor({ name, data }: ResponseErrorDto) {
    this.name = name;
    this.data = JSON.stringify(data);
  }
}
