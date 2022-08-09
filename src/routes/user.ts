import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

router.get('/list', (req: Request, res: Response, next: NextFunction) => {
  res.send('user list');
});

export default router;