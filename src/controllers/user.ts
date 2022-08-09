import { Request, Response, NextFunction } from 'express';

const getUserList = async (req: Request, res: Response, next: NextFunction) => {
  res.send('Get user list');
};

export default {
  getUserList
}