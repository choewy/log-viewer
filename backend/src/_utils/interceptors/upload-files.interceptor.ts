import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { diskStorage, StorageEngine } from 'multer';
import { extname } from 'path';
import { v4 as uuid } from 'uuid';

const storageEngine: StorageEngine = diskStorage({
  destination(_req, _file, callback) {
    const dirPath = process.cwd() + '/temp';
    callback(null, dirPath);
  },
  filename(_req, file, callback) {
    const extenstion = extname(file.originalname);
    const filename = `${uuid()}${extenstion}`;
    callback(null, filename);
  },
});

const multerOptions: MulterOptions = {
  storage: storageEngine,
};

export const UploadFilesInterceptor = AnyFilesInterceptor(multerOptions);
