import { Handler } from 'express';

/**
 * Tests connectivity to ensure appropriate access and network configuration.
 */
// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const smokeTestHandler: Handler = async (_req, res) => {
  await Promise.all([]);

  res.send('');
};
