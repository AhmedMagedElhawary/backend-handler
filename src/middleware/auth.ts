import { AppError } from '../framework/appError';
import { initPinoLogger } from '../framework/logger';
import { NextFunction, Request, Response } from 'express';

const logger = initPinoLogger('AUTH'),
  auth = (req: Request, _res: Response, next: NextFunction): void => {
    const passedAPIKey = req.header('x-api-key');

    if (passedAPIKey === 'testAPIKey') {
      logger.debug({
        message: 'Authenticated',
        ...req.logTags,
      });
      next();
    } else {
      throw AppError.unauthorized('UNAUTHORIZED_ERROR');
    }
  };

export default auth;
