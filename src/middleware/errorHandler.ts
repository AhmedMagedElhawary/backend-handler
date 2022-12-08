import { NextFunction, Request, Response } from 'express';
import { AppError } from '../framework/appError';

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
  // if (req.logTags?.http) {
  //   req.logTags.http.status_code = err instanceof AppError ? err.status : 500;
  // }

  if (err instanceof AppError) {
    // logger.error({
    //   message,
    //   errorType: err.errorType.toUpperCase(),
    //   ...req.logTags,
    // });

    return res.status(err.status).json(message);
  }

  // logger.error({
  //   message: `Unhandled error occurred with error message: ${message}.`,
  //   stack: err.stack,
  //   ...req.logTags,
  // });

  return res.status(500).json(message);
}

export { errorHandler };
