import { Request, Response } from 'express';

export const getWelcomeMessage = (req: Request, res: Response) => {
  const data = {
    title: 'WELCOME TO SETUP MONOREPO',
    subtitle: 'COMING SOON'
  };
  res.send(data);
};