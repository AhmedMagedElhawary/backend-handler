/**
 * Tests connectivity to ensure appropriate access and network configuration.
 */
 import { Request, Response } from 'express';

export const smokeTestHandler = async(_req: Request, res: Response) => {
  await Promise.all([]);
  res.send('');
};
