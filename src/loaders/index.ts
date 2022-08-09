import { Application } from 'express';
import expressLoader from './express';
import mySqlLoader from './mysql';

export default async ({ app }: { app: Application }) => {
  const mysqlConnection = await mySqlLoader();
  await expressLoader({ app });
};
