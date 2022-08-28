import { body, param, query } from 'express-validator';
import { validator } from '@/middlewares/validator';
import { UserKey } from '@/types/user';

const POSITIONS = ["user", "admin"] as const;

export const validation = {
  addUser: [
    body(UserKey.NAME).trim().isString().notEmpty().withMessage('please enter name.'),
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
    body(UserKey.NAME).trim().isString().notEmpty().withMessage('please enter name.'),
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
  deleteUserById: [body(UserKey.ID).notEmpty().withMessage('please enter id.'), validator],
  getUserById: [query(UserKey.ID).isInt().notEmpty().withMessage('please enter id.'), validator], 
};