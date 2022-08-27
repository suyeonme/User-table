import * as User from '@/db/user';
import { UserInterface } from '@/types/user';

export const getUserList = async () => {
  try {
    return User.getUserList();
  } catch (error) {
    throw error;
  }
};

export const addUser = async (user: UserInterface) => {
  try {
    return User.addUser(user);
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id: string) => {
  try {
    return User.deleteUser(id);
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (id: string) => {
  try {
    return User.getUserById(id);
  } catch (error) {
    throw error;
  }
};

export const updateUserById = async (user: UserInterface) => {
  try {
    return User.updateUserById(user);
  } catch (error) {
    throw error;
  }
};
