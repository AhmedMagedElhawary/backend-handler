import { NextFunction, Request, Response } from 'express';

const logTagsSetter = (
  req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  req.logTags = {
    endPoint: `${req.baseUrl}${req.path}`,
    userAgent: req.headers['user-agent'],
    http: {
      method: req.method,
      status_code: 200,
    },
  };
  next();
};

export default logTagsSetter;
