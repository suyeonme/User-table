import dotenv from 'dotenv';

dotenv.config({ path: 'config/.env' });

export default {
  PORT: process.env.PORT
}
