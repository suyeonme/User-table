export const UserQueries = {
  GetUsers: `
    SELECT * FROM User;
  `,

  AddUser: `
    INSERT INTO User(name, company, position)
    VALUES(?, ?, ?)
  `,

  DeleteUserById: `
    DELETE FROM User
    WHERE id = ?
  `,

  GetUserById: `
    SELECT * FROM User
    WHERE id = ?
  `,

  UpdateUserById: `
    UPDATE User 
    SET name = ?,company = ?, position = ?
    WHERE id = ?;
  `,
};
