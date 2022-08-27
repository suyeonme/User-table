import { getConnection } from '@/loaders/mysql';
import { UserQueries } from '@/db/sql/user';
import { UserInterface } from '@/types/user';

export const getUserList = async () => {
  return getConnection(UserQueries.GetUsers);
};

export const addUser = async (user: UserInterface) => {
  const { name, company, position } = user;
  return getConnection(UserQueries.AddUser, [name, company, position]);
};

export const deleteUser = async (id: string) => {
  return getConnection(UserQueries.DeleteUserById, id);
};

export const getUserById = async (id: string) => {
  return getConnection(UserQueries.GetUserById, id);
};

export const updateUserById = async (user: UserInterface) => {
  const { name, company, position, id } = user;
  return getConnection(UserQueries.UpdateUserById, [name, company, position, id]);
};
