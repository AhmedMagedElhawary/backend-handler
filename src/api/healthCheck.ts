import { Request, Response } from 'express';

export const healthCheckHandler = (req: Request, res: Response) => {
  res.sendStatus(200);
};
