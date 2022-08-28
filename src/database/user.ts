import { getConnection } from '@/loaders/mysql';
import { UserQueries } from '@/db/sql/user';
import { UserInterface } from '@/types/user';

export const getUserList = async () => {
  try {
    return getConnection(UserQueries.GetUsers);
  } catch (error) {
    if (error instanceof Error) {
      throw { status: 500, message: error?.message || error };
    }
  }
};

export const addUser = async (user: UserInterface) => {
  const { name, company, position } = user;
  try {
    return getConnection(UserQueries.AddUser, [name, company, position]);
  } catch (error) {
    if (error instanceof Error) {
      throw { status: 500, message: error?.message || error };
    }
  }
};

export const deleteUserById = async (id: string) => {
  try {
    return getConnection(UserQueries.DeleteUserById, id);
  } catch (error) {
    if (error instanceof Error) {
      throw { status: 500, message: error?.message || error };
    }
  }
};

export const getUserById = async (id: string) => {
  try {
    return getConnection(UserQueries.GetUserById, id);
  } catch (error) {
    if (error instanceof Error) {
      throw { status: 500, message: error?.message || error };
    }
  }
};

export const updateUserById = async (user: UserInterface) => {
  const { name, company, position, id } = user;
  try {
    return getConnection(UserQueries.UpdateUserById, [
      name,
      company,
      position,
      id,
    ]);
  } catch (error) {
    if (error instanceof Error) {
      throw { status: 500, message: error?.message || error };
    }
  }
};
