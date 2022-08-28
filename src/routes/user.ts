import express from 'express';
import { validation } from '@/utils/validation.meta';
import userController from '@/controllers/user';

const router = express.Router();

router.get('/list', userController.getUserList);
router.post('/add', validation.addUser, userController.addUser);
router.post(
  '/delete',
  validation.deleteUserById,
  userController.deleteUserById
);
router.get('/get', validation.getUserById, userController.getUserById);
router.post(
  '/update',
  validation.updateUserById,
  userController.updateUserById
);

export default router;
