import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { Status } from '@/types/common';
import { UserKey } from '@/types/user';
import { body, query } from 'express-validator';

const validator = (req: Request, res: Response, next: NextFunction) => {
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

const POSITIONS = ['user', 'admin'] as const;

/**
 * @description validations for user endpoint
 */
export const validation = {
  addUser: [
    body(UserKey.NAME)
      .trim()
      .isString()
      .notEmpty()
      .withMessage('please enter name.'),
    body(UserKey.COMPANY)
      .trim()
      .isString()
      .notEmpty()
      .withMessage('please enter company.'),
    body(UserKey.POSITION)
      .trim()
      .isString()
      .isIn(POSITIONS)
      .notEmpty()
      .withMessage('please enter position.'),
    validator,
  ],
  updateUserById: [
    body(UserKey.ID).isInt().notEmpty().withMessage('please enter an id.'),
    body(UserKey.NAME)
      .trim()
      .isString()
      .notEmpty()
      .withMessage('please enter name.'),
    body(UserKey.COMPANY)
      .trim()
      .isString()
      .notEmpty()
      .withMessage('please enter company.'),
    body(UserKey.POSITION)
      .trim()
      .isString()
      .isIn(POSITIONS)
      .notEmpty()
      .withMessage('please enter position.'),
    validator,
  ],
  deleteUserById: [
    body(UserKey.ID).notEmpty().withMessage('please enter id.'),
    validator,
  ],
  getUserById: [
    query(UserKey.ID).isInt().notEmpty().withMessage('please enter id.'),
    validator,
  ],
};
