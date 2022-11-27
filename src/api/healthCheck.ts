/**
 * Signifies that the API is available to serve requests.
 *
 * The deployment environment calls this endpoint to see if the container is
 * unhealthy and needs to be recycled.
 */
 import { Request, Response } from 'express';

export const healthCheckHandler = (_req: Request, res: Response) => {
  res.sendStatus(200);
};
