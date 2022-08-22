import * as User from '@/db/user';
import { UserInterface } from '@/types/user';

export const getUserList = async () => {
  return User.getUserList();
};

export const addUser = async (user: UserInterface) => {
  try {
    return User.addUser(user);
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (id: string) => {
  return User.deleteUser(id);
};

export const getUserById = async (id: string) => {
  return User.getUserById(id);
};

export const updateUser = async (user: UserInterface) => {
  return User.updateUser(user);
};


