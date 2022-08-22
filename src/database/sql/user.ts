export const UserQueries = {
  GetUsers: `
    SELECT * FROM User;
  `,

  AddUser: `
  INSERT INTO User(name, company, position) VALUES(?, ?, ?)
`,

  DeleteUserById: `
UPDATE teams_system.teams
SET isActive = false
WHERE
  id = ?
`,

  GetUserById: `
  SELECT
    id,
      name,
      league,
    (case when t.isActive is not null
      then 'true'
      else 'false'
    end) as 'isActive'
  FROM teams_system.teams as t
  WHERE
    id = ?
  `,

  UpdateUserById: `
  UPDATE teams_system.teams
  SET name = ?,
      league = ?
  WHERE
    id = ?
  `,
};
