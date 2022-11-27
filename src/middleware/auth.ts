
import { NextFunction, Request, Response } from 'express';
import { initPinoLogger } from '../framework/logger';
import { AppError } from '../framework/appError';

const logger = initPinoLogger('AUTH');

const auth = (
  req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  // const { headers } = req;
  // const { country } = headers;
  // if (country) {
      req.logTags = {
        endPoint: `${req.baseUrl}${req.path}`,
        userAgent: req.headers['user-agent'],
        http: {
          method: req.method,
          status_code: 200,
        },
      };

      logger.debug({
        message: 'Authenticated',
        ...req.logTags,
      });
    next();
  // } else {
  //   throw AppError.unauthorized(
  //     'UNAUTHORIZED_ERROR',
  //   );
  // }
};

export default auth;
