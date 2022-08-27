import { Request, Response, NextFunction } from 'express';
import * as UserService from '@/services/user';

const getUserList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userList = await UserService.getUserList();
    return res.status(200).send({ data: userList });
  } catch (error) {
    res.status(500).send(error); // ** 에러 메세지 반환
  }
};

const addUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserService.addUser(req.body);
    return res.status(200).send({ msg: 'success', user }); // ** user 반환
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserService.deleteUser(req.body.id);
    return res.status(200).send({ msg: 'success' });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.query.id as string;
  try {
    const user = await UserService.getUserById(userId);
    return res.status(200).send({ user });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserService.updateUserById(req.body);
    return res.status(200).send({ msg: 'success', user });
  } catch (error) {
    res.status(500).send(error);
  }
};

export default {
  getUserList,
  getUserById,
  addUser,
  updateUserById,
  deleteUser,
};
