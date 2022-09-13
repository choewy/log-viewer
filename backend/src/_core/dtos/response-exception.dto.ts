import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ResponseErrorDto } from './response-error.dto';

export class ResponseExceptionDto {
  @ApiResponseProperty()
  @Expose()
  statusCode: number;

  @ApiResponseProperty()
  @Expose()
  error: ResponseErrorDto;

  constructor(statusCode: number, error: ResponseErrorDto) {
    this.statusCode = statusCode;
    this.error = error ? new ResponseErrorDto(error) : null;
  }
}
