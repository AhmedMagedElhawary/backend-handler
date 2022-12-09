import { NextFunction, Request, Response } from 'express';
import { AppError } from '../framework/appError';
import { initPinoLogger } from '../framework/logger';

const logger = initPinoLogger('VALIDATOR');

// TODO: read about validation
export const path1Validator = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  // Const {isValid} = req.params.
  const isValid = true; // TODO: add payload checking

  if (!isValid) {
    throw AppError.badRequest('invalid_Payload');
  }

  logger.debug({
    message: 'Valid',
    ...req.logTags,
  });
  next();
};
