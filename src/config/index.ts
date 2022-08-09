import dotenv from 'dotenv';

dotenv.config({ path: 'src/config/.env' });

export default {
  PORT: process.env.PORT,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME
}


