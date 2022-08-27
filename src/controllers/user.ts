import { Request, Response, NextFunction } from 'express';
import * as UserService from '@/services/user';
import { isValidReqBody, getErrorResponse, Status, ErrorMessage } from '@/utils';

const getUserList = async (req: Request, res: Response) => {
  // * 파라미터에 이름을 넣으면, 해당 유저만 반환

  try {
    const users = await UserService.getUserList();
    return res.status(200).send({ status: Status.OK, data: users });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(getErrorResponse(error));
    }
  }
};

const addUser = async (req: Request, res: Response) => {
    // * createAt 추가

  const requiredKeys = ['name', 'company', 'position'];
  if (!isValidReqBody(requiredKeys, req.body)) {
    return res.status(400).send({
      status: Status.FAILED,
      data: {
        error: `${ErrorMessage.REQUIRED_KEY_IS_MISSING}${requiredKeys}`,
      },
    });
  }

  try {
    const user = await UserService.addUser(req.body);
    return res.status(201).send({ status: Status.OK, data: user });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(getErrorResponse(error));
    }
  }
};

const deleteUser = async (req: Request, res: Response) => {
  if (!req.body?.id) {
    return res.status(400).send({
      status: Status.FAILED,
      data: {
        error: ErrorMessage.USER_ID_IS_REQUIRED,
      },
    });
  }

  try {
    const user = await UserService.deleteUser(req.body.id);
    return res.status(200).send({ status: Status.OK, data: user });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(getErrorResponse(error));
    }
  }
};

const getUserById = async (req: Request, res: Response) => {
  const userId = req.query?.id as string;

  if (!userId) {
    return res.status(400).send({
      status: Status.FAILED,
      data: {
        error: ErrorMessage.USER_ID_IS_REQUIRED,
      },
    });
  }

  try {
    const user = await UserService.getUserById(userId);
    return res.status(200).send({ user });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(getErrorResponse(error));
    }
  }
};

const updateUserById = async (req: Request, res: Response) => {
  const requiredKeys = ['id', 'name', 'company', 'position'];
  if (!isValidReqBody(requiredKeys, req.body)) {
    return res.status(400).send({
      status: Status.FAILED,
      data: {
        error: `${ErrorMessage.REQUIRED_KEY_IS_MISSING}${requiredKeys}`,
      },
    });
  }

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
  deleteUser,
};
