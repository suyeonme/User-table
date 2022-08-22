import express from 'express';
import userController from '@/controllers/user';

const router = express.Router();

router.get('/list', userController.getUserList);
router.post('/add', userController.addUser);

export default router;