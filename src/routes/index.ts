import { app } from '../index';
import { Request, Response } from 'express';

app.get('/health-check', (req: Request, res: Response) => {
  res.send('BFF is healthy!');
});

