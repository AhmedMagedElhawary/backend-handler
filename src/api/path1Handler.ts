import { Request, Response } from 'express';
import { initPinoLogger } from '../framework/logger';

const logger = initPinoLogger("path1Handler");

export const path1Handler = async (req: Request, res: Response) => {
  const path1HandlerRequest = {}; // case the request details here to strong type
  logger.info({
    message: 'processing request',
    path1HandlerRequest,
    ...req.logTags,
  });

  /***
   * Add logic here
   */
  await Promise.all([]);  // TODO: Replace with logic async calls


  const path1HandlerResponse = 'Hello World !'  // set the final reply
  logger.info({
    message: 'request completed',
    path1HandlerResponse,
    ...req.logTags,
  });
  res.status(200).json(path1HandlerResponse);
};

