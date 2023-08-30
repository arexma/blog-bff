import { app } from '../index';
import express, { Router, Request, Response } from 'express';

const router = Router();

router.get('/health-check', (req: Request, res: Response) => {
  res.send('BFF is healthy!');
});


export default router;

