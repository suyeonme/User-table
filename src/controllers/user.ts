import { Request, Response, NextFunction } from 'express';
import * as UserService from '@/services/user';
import { getErrorResponse } from '@/utils/index';
import { Status } from '@/types/common';
import { setCache } from '@/middlewares/redis';

const getUserList = async (req: Request, res: Response) => {
  // * 파라미터에 이름을 넣으면, 해당 유저만 반환
  try {
    const users = await UserService.getUserList();
    await setCache(req.url, users);
    return res.status(200).send({ status: Status.OK, data: users });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(getErrorResponse(error));
    }
  }
};

const addUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.addUser(req.body);
    return res.status(201).send({ status: Status.OK, data: user });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(getErrorResponse(error));
    }
  }
};

const deleteUserById = async (req: Request, res: Response) => {
  try {
    await UserService.deleteUserById(req.body.id);
    return res.status(200).send({ status: Status.OK, data: [] });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(getErrorResponse(error));
    }
  }
};

const getUserById = async (req: Request, res: Response) => {
  const userId = req.query.id as string;

  try {
    const user = await UserService.getUserById(userId);
    await setCache(req.url, user);
    return res.status(200).send({ status: Status.OK, data: user });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(getErrorResponse(error));
    }
  }
};

const updateUserById = async (req: Request, res: Response) => {
  try {
    const user = await UserService.updateUserById(req.body);
    return res.status(200).send({ status: Status.OK, data: user });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(getErrorResponse(error));
    }
  }
};

export default {
  getUserList,
  getUserById,
  addUser,
  updateUserById,
  deleteUserById,
};
