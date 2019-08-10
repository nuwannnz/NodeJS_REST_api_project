import { Request, Response } from 'express';
import { HTTP403Error } from '../../../utils/httpErrors';

import logger from '../../../utils/logger';
import { handleError } from '../../../utils';
import { verifyJWTToken } from '../../../middleware/auth';

const API_PRE = '/';

export default [
  {
    path: `${API_PRE}/`,
    method: 'get',
    handler: async (req: Request, res: Response) => {
      try {
        // do work
      } catch (error) {
        handleError(error, res);
      }
    }
  }
];
