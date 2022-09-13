import { applyDecorators, UseInterceptors } from '@nestjs/common';
import {
  ApiBody,
  ApiBodyOptions,
  ApiConsumes,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { UploadFilesInterceptor } from '@util/interceptors';
import { SwaggerMimeTypes } from './enums';

export const SwaggerBody = ({
  format,
  ...options
}: ApiBodyOptions & { format?: 'x-www-form' | 'multipart' }) => {
  const decorators = [
    ApiBody(options),
    ApiBadRequestResponse({
      description: '유효성 검사 오류',
    }),
  ];

  let others: MethodDecorator[];
  switch (format) {
    case 'x-www-form':
      others = [ApiConsumes(SwaggerMimeTypes.Xform, SwaggerMimeTypes.Json)];
      break;
    case 'multipart':
      others = [
        ApiConsumes(SwaggerMimeTypes.Multipart, SwaggerMimeTypes.Json),
        UseInterceptors(UploadFilesInterceptor),
      ];
      break;
    default:
      others = [ApiConsumes(SwaggerMimeTypes.Json)];
      break;
  }

  return applyDecorators(...decorators.concat(others));
};
