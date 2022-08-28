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
    const result = await User.addUser(user);
    const hasInsertedRow = Array.isArray(result) && result.length > 1;
    return hasInsertedRow ? result[1] : result;
  } catch (error) {
    throw error;
  }
};

export const deleteUserById = async (id: string) => {
  try {
    return User.deleteUserById(id);
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
  if (!user.id) return;

  try {
    await User.updateUserById(user);
    return User.getUserById(user.id);
  } catch (error) {
    throw error;
  }
};
