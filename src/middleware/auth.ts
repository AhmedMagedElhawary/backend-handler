
import { NextFunction, Request, Response } from 'express';
import { AppError } from '../framework/appError';

const auth = (
  _req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  // const { headers } = req;
  // const { country } = headers;
  // if (country) {
    // TODO: Enable logTags after fixing tsconfig.json
      // req.logTags = {
      //   country,
      //   endPoint: `${req.baseUrl}${req.path}`,
      //   userAgent: req.headers['user-agent'],
      //   http: {
      //     method: req.method,
      //     status_code: 200,
      //   },
      // };
    next();
  // } else {
  //   throw AppError.unauthorized(
  //     'UNAUTHORIZED_ERROR',
  //   );
  // }
};

export default auth;
