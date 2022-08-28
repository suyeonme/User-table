import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { Status } from '@/types/common';

export const validator = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({
    status: Status.FAILED,
    data: {
      error: errors.array()[0].msg,
    },
  });
};
