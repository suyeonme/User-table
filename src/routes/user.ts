import express from 'express';
import { validation } from '@/middlewares/validator';
import { getCache } from '@/middlewares/redis';
import userController from '@/controllers/user';

const router = express.Router();

router.get('/list', getCache, userController.getUserList);
router.post('/add', validation.addUser, userController.addUser);
router.post(
  '/delete',
  validation.deleteUserById,
  userController.deleteUserById
);
router.get('/get', validation.getUserById, getCache, userController.getUserById);
router.post(
  '/update',
  validation.updateUserById,
  getCache,
  userController.updateUserById
);

export default router;
