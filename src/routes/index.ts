import express from 'express';
import mainRouter from '@/routes/main';
import userRouter from '@/routes//user';

const router = express.Router();

router.use('/', mainRouter);
router.use('/user', userRouter);

export default router;
