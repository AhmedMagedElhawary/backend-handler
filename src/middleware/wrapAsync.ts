import { NextFunction, Request, Response } from 'express';

export function wrapAsync<T = unknown>(
  callback: (
    req: Request<T>,
    res: Response,
    next: NextFunction,
  ) => Promise<unknown>,
) {
  return function wa(req: Request<T>, res: Response, next: NextFunction): void {
    callback(req, res, next).catch(next);
  };
}
