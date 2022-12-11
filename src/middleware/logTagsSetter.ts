import { NextFunction, Request, Response } from 'express';

const logTagsSetter = (
  req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  req.logTags = {
    endPoint: `${req.baseUrl}${req.path}`,
    http: {
      method: req.method,
      // eslint-disable-next-line camelcase
      status_code: 200,
    },
    userAgent: req.headers['user-agent'],
  };
  next();
};

export default logTagsSetter;
