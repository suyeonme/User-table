import { Request, Response, NextFunction } from 'express';
import * as UserService from '@/services/user';

const getUserList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userList = await UserService.getUserList();
    return res.status(200).send({ data: userList });
  } catch (error) {
    res.status(500).send(error);
  }
};

const addUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserService.addUser(req.body);
    return res.status(200).send({ msg: 'success', user });
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
  try {
    const user = await UserService.getUserById(req.body.id);
    return res.status(200).send({ user });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserService.updateUser(req.body.user);
    return res.status(200).send({ msg: 'success' });
  } catch (error) {
    res.status(500).send(error);
  }
};

export default {
  getUserList,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
