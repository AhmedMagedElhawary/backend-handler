import { Request, Response } from 'express';

export const path1Handler = async (_req: Request, res: Response) => {
  await Promise.all([]);  // TODO: Replace with async calls
  const path1HandlerResponse = 'Hello World !'

  res.status(200).json(path1HandlerResponse);
  return;
};

