import { AppError } from '../framework/appError';
import { NextFunction, Request, Response } from 'express';

function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
): Response {
  let message;
  if (err.message) {
    message = err.message;
  } else if (typeof err === 'string') {
    message = err;
  } else {
    message = JSON.stringify(err);
  }

  /*
   * If (req.logTags?.http) {
   *   Req.logTags.http.status_code = err instanceof AppError ? err.status : 500;
   * }
   */

  if (err instanceof AppError) {
    /*
     * Logger.error({
     *   message,
     *   errorType: err.errorType.toUpperCase(),
     *   ...req.logTags,
     * });
     */

    return res.status(err.status).json(message);
  }

  /*
   * Logger.error({
   *   Message: `Unhandled error occurred with error message: ${message}.`,
   *   Stack: err.stack,
   *   ...req.logTags,
   * });
   */

  return res.status(500).json(message);
}

export { errorHandler };
