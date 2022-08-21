import { Request, Response, NextFunction } from 'express';
import UserService from '@/services/user';

const getUserList = async (req: Request, res: Response, next: NextFunction) => {
  // 테이블이 존재하는지 확인
  // 존재하지 않는다면 테이블 생성
  // service.Func
  // const { user, company } = await UserService.Signup(userDTO);
  // return res.json({ user, company });
  
  try {
    const userList = await UserService.getUserList();
    return res.status(200).send({ list: userList });
  } catch (error) {
    res.status(500).send(error);
  }
};

export default {
  getUserList,
};
