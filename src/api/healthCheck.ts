import { Request, Response } from 'express';

export const healthCheckHandler = (req: Request, res: Response) => {
  console.log(req, res);
  res.sendStatus(200);
};
