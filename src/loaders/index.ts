import { Application } from 'express';
import expressLoader from './express';
import { init } from './mysql';

export default async ({ app }: { app: Application }) => {
  const mysqlConnection = await init();
  const expressApp = await expressLoader({ app });
};
