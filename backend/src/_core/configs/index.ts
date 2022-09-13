export * from './types';
export * from './interfaces';
export * from './helpers';

import server from './server.config';
import cors from './cors.config';
import auth from './auth.config';
import typeorm from './typeorm.config';
import swagger from './swagger.config';

export const configs = [server, cors, auth, typeorm, swagger];
