import { initPinoLogger } from '../framework/logger';
import { Request, Response } from 'express';

const logger = initPinoLogger('path1Handler');

export const processPath1Request = async (
  _path1Request: unknown,
): Promise<unknown> => {
  /**
   * *
   * Add logic here
   */
  // Replace with logic async calls
  await Promise.all([]);
  const path1Response = 'Hello World !';
  return path1Response;
};

export const path1Handler = async (req: Request, res: Response) => {
  // Caste the request details here to strong type
  const path1HandlerRequest = {};
  logger.info({
    message: 'processing request',
    path1HandlerRequest,
    ...req.logTags,
  });

  const path1HandlerResponse = await processPath1Request(path1HandlerRequest);

  logger.info({
    message: 'request completed',
    path1HandlerResponse,
    ...req.logTags,
  });
  res.status(200).json(path1HandlerResponse);
};
