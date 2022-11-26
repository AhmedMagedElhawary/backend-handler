import { NextFunction, Request, Response } from 'express';

export function wrapAsync<T = any>(
  callback: (
    req: Request<T>,
    res: Response,
    next: NextFunction,
  ) => Promise<any>,
) {
  return function (req: Request<T>, res: Response, next: NextFunction): void {
    callback(req, res, next).catch(next);
  };
}
