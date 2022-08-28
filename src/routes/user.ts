import express from 'express';
import userController from '@/controllers/user';

const router = express.Router();

router.get('/list', userController.getUserList);
router.post('/add', userController.addUser);
router.post('/delete', userController.deleteUserById);
router.get('/get', userController.getUserById);
router.post('/update', userController.updateUserById);

export default router;