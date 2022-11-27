import { AppError } from "../framework/appError";
import { Request, Response, NextFunction } from 'express';

//TODO: read about validation
export const path1Validator = (_req: Request, _res: Response, next:NextFunction) => {
    // const {isValid} = req.params.
    const isValid= true;

    if (!isValid) {
      throw AppError.badRequest(
        'invalid_Payload',
      );
    }
    next();
};
