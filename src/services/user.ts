import User from '@/db/user';

class UserService {
  static async getUserList() {
    const userList = await User.getUserList();
    return userList;
  }
}

export default UserService;
