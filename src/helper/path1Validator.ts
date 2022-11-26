import { AppError } from "../framework/appError";

import { Handler } from 'express';
import { nextTick } from "process";

//TODO: read about validation
export const path1Validator: Handler = (req, res, next) => {
  // const {isValid} = req.params.
  const isValid= true;

  if (!isValid) {
    throw AppError.badRequest(
      'invalid_Payload',
    );
  }
  next();
};
