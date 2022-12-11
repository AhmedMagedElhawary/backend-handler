import { AppError } from '../framework/appError';
import { initPinoLogger } from '../framework/logger';
import { NextFunction, Request, Response } from 'express';

const logger = initPinoLogger('VALIDATOR');

export const path1Validator = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  /*
   * Const {isValid} = req.params.
   * Add payload checking
   */
  const isValid = true;

  if (!isValid) {
    throw AppError.badRequest('invalid_Payload');
  }

  logger.debug({
    message: 'Valid',
    ...req.logTags,
  });
  next();
};
