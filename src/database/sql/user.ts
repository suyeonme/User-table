export const UserQueries = {
  GetUsers: `
    SELECT * FROM User;
  `,

  AddUser: `
    INSERT INTO User(name, company, position) VALUES(?, ?, ?);
    SELECT * FROM User WHERE id = LAST_INSERT_ID();
  `,

  DeleteUserById: `
    DELETE FROM User WHERE id = ?;
  `,

  GetUserById: `
    SELECT * FROM User WHERE id = ?;
  `,

  UpdateUserById: `
    UPDATE User SET name = ?, company = ?, position = ? WHERE id = ?;
  `,
};
