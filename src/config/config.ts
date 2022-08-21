import dotenv from 'dotenv';

dotenv.config();
const { PORT, DB_USER, DB_PASSWORD, DB_NAME, DB_CONNECTION_LIMIT, DB_HOST } = process.env;

export default {
  PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_CONNECTION_LIMIT,
  DB_HOST
};
