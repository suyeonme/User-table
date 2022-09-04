import { Application } from 'express';
import expressLoader from './express';
import { initConnectionPool } from './mysql';
import config from '@/config/config';

export default async ({ app }: { app: Application }) => {
  if (config.NODE_ENV !== 'test') {
    const mysqlConnection = await initConnectionPool();
  }
  const expressApp = await expressLoader({ app });
};
